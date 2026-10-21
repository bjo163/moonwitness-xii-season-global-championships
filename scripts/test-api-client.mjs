import assert from 'node:assert/strict';
import { checkMoonWitnessApi, getMoonWitnessApiConfig } from '../src/services/moonwitnessApi.js';

assert.deepEqual(getMoonWitnessApiConfig(' https://api.example.test/// '), {
  configured: true,
  baseUrl: 'https://api.example.test',
  healthUrl: 'https://api.example.test/readyz',
});
assert.deepEqual(getMoonWitnessApiConfig(''), {
  configured: false,
  baseUrl: '',
  healthUrl: null,
});
let called = false;
const absent = await checkMoonWitnessApi({ baseUrl: '', fetchImpl: async () => { called = true; } });
assert.equal(absent.status, 'unconfigured');
assert.equal(called, false);

let requestedUrl = '';
let requestOptions;
const healthy = await checkMoonWitnessApi({
  baseUrl: 'https://api.example.test',
  fetchImpl: async (url, options) => {
    requestedUrl = url;
    requestOptions = options;
    return { ok: true, status: 200, json: async () => ({ status: 'healthy', database: 'connected', registeredModels: ['base.user', 'xii.submission'] }) };
  },
});
assert.equal(healthy.status, 'healthy');
assert.equal(healthy.database, 'connected');
assert.equal(healthy.models.length, 2);
assert.equal(requestedUrl, 'https://api.example.test/readyz');
assert.equal(requestOptions.method, 'GET');
assert.equal(requestOptions.cache, 'no-store');
assert.deepEqual(requestOptions.headers, { Accept: 'application/json' });
assert.equal('Authorization' in requestOptions.headers, false);

const unhealthy = await checkMoonWitnessApi({
  baseUrl: 'https://api.example.test',
  fetchImpl: async () => ({ ok: false, status: 503, json: async () => ({ status: 'unhealthy', database: 'disconnected' }) }),
});
assert.equal(unhealthy.status, 'unhealthy');
assert.equal(unhealthy.database, 'disconnected');

const malformed = await checkMoonWitnessApi({
  baseUrl: 'https://api.example.test',
  fetchImpl: async () => ({ ok: true, status: 200, json: async () => ({ status: 'healthy', database: null, registeredModels: 'not-an-array' }) }),
});
assert.equal(malformed.status, 'healthy');
assert.equal(malformed.database, 'unknown');
assert.deepEqual(malformed.models, []);

const unreachable = await checkMoonWitnessApi({
  baseUrl: 'https://api.example.test',
  fetchImpl: async () => { throw new TypeError('network error'); },
});
assert.equal(unreachable.status, 'unreachable');

await assert.rejects(
  checkMoonWitnessApi({ baseUrl: 'https://api.example.test', fetchImpl: async () => { const error = new Error('aborted'); error.name = 'AbortError'; throw error; } }),
  { name: 'AbortError' },
);
console.log('API client tests PASS: config, unconfigured mode, readiness, unhealthy, malformed payload, network and abort states.');
