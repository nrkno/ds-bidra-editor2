export const OK = 'OK';
export const WARNING = 'WARNING';
export const FAIL = 'FAIL';
type SystemStatus = 'OK' | 'WARNING' | 'FAIL' | 'UNDEFINED';

interface HealthCheckResponse {
  name: string;
  status: SystemStatus;
  updated?: string;
  documentation: string;
  checks: SystemCheck[];
}

interface SystemCheck {
  description: string;
  updated?: string;
  status: SystemStatus;
  errors: string[];
}

export async function performHealthCheck() {
  const healthCheckResponse: HealthCheckResponse = {
    name: 'External user management for Mimir',
    status: 'UNDEFINED',
    updated: undefined,
    documentation: 'https://nrkconfluence.atlassian.net/wiki/spaces/META/pages/2995383/Bilderobot',
    checks: [],
  };

  healthCheckResponse.updated = new Date().toISOString();
  return healthCheckResponse;
}
