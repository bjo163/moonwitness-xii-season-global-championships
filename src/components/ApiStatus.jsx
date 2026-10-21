import React, { useCallback, useEffect, useState } from 'react';
import { checkMoonWitnessApi, getMoonWitnessApiConfig } from '../services/moonwitnessApi.js';

const statusLabels = {
  unconfigured: 'NOT CONFIGURED',
  checking: 'CHECKING…',
  healthy: 'API + DATABASE READY',
  unhealthy: 'READINESS FAILED',
  unreachable: 'API UNREACHABLE',
};

export default function ApiStatus() {
  const config = getMoonWitnessApiConfig();
  const [result, setResult] = useState({
    status: config.configured ? 'checking' : 'unconfigured',
    database: 'unknown',
    models: [],
    checkedAt: null,
    message: config.configured
      ? 'Checking the public readiness endpoint.'
      : 'Set VITE_MW_API_BASE_URL to enable the XI backend readiness check.',
  });

  const refresh = useCallback(async (signal) => {
    if (!config.configured) {
      setResult({
        status: 'unconfigured',
        database: 'unknown',
        models: [],
        checkedAt: null,
        message: 'Set VITE_MW_API_BASE_URL to enable the XI backend readiness check.',
      });
      return;
    }
    setResult((current) => ({ ...current, status: 'checking', message: 'Checking API readiness…' }));
    try {
      const next = await checkMoonWitnessApi({ signal });
      if (!signal?.aborted) setResult(next);
    } catch (error) {
      if (error?.name !== 'AbortError') throw error;
    }
  }, [config.configured]);

  useEffect(() => {
    const controller = new AbortController();
    void refresh(controller.signal);
    return () => controller.abort();
  }, [refresh]);

  const status = result.status;
  return (
    <article className="card mw-api-status" aria-labelledby="mw-api-status-title">
      <div className="mw-api-status-top">
        <small>07 / PLATFORM CONNECTION</small>
        <span className={`mw-api-indicator is-${status}`} aria-hidden="true" />
      </div>
      <h3 id="mw-api-status-title">XI BACKEND LINK</h3>
      <p className="mw-api-status-label" role="status" aria-live="polite">{statusLabels[status] ?? 'UNKNOWN STATUS'}</p>
      <p>{result.message}</p>
      <dl className="mw-api-details">
        <div><dt>DATABASE</dt><dd>{String(result.database ?? 'unknown').toUpperCase()}</dd></div>
        <div><dt>MODELS REPORTED</dt><dd>{result.models?.length || '—'}</dd></div>
      </dl>
      {config.configured && <p className="mw-api-endpoint"><code>{config.healthUrl}</code></p>}
      <button className="btn secondary" type="button" onClick={() => void refresh()} disabled={status === 'checking'}>
        {status === 'checking' ? 'CHECKING…' : 'CHECK CONNECTION ↻'}
      </button>
      <p className="mw-api-disclaimer">Readiness is a connection check only. XII workspace data is still browser-local until a versioned, authenticated server model and sync flow are implemented.</p>
    </article>
  );
}
