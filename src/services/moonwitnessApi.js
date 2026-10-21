const configuredBaseUrl = import.meta.env.VITE_MW_API_BASE_URL?.trim() ?? '';

export function getMoonWitnessApiConfig() {
  const baseUrl = configuredBaseUrl.replace(/\/+$/, '');
  return { configured: Boolean(baseUrl), baseUrl, healthUrl: baseUrl ? `${baseUrl}/readyz` : null };
}

/** Public readiness check only; this never sends credentials or workspace notes. */
export async function checkMoonWitnessApi({ fetchImpl = fetch, signal } = {}) {
  const config = getMoonWitnessApiConfig();
  if (!config.configured) return { status: 'unconfigured', database: 'unknown', models: [], checkedAt: null };
  try {
    const response = await fetchImpl(config.healthUrl, { method: 'GET', headers: { Accept: 'application/json' }, cache: 'no-store', signal });
    const body = await response.json().catch(() => ({}));
    const checkedAt = new Date().toISOString();
    if (!response.ok) return { status: 'unhealthy', database: body.database ?? 'unknown', models: Array.isArray(body.registeredModels) ? body.registeredModels : [], checkedAt, message: `Readiness endpoint returned HTTP ${response.status}.` };
    return { status: body.status === 'healthy' ? 'healthy' : 'unhealthy', database: body.database ?? 'unknown', models: Array.isArray(body.registeredModels) ? body.registeredModels : [], checkedAt, message: body.status === 'healthy' ? 'API and database readiness confirmed.' : 'API responded, but readiness is not healthy.' };
  } catch (error) {
    if (error?.name === 'AbortError') throw error;
    return { status: 'unreachable', database: 'unknown', models: [], checkedAt: new Date().toISOString(), message: 'Could not reach API. Check URL, deployment and CORS configuration.' };
  }
}
