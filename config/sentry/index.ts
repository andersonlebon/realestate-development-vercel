import * as Sentry from '@sentry/nextjs';
import { Integrations } from '@sentry/tracing';
import { REACT_SENTRY_ENABLE, REACT_SENTRY_DSN, REACT_SENTRY_ENVIRONMENT } from '../';

if (REACT_SENTRY_ENABLE === 'true' && REACT_SENTRY_DSN) {
  Sentry.init({
    dsn: REACT_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    environment: REACT_SENTRY_ENVIRONMENT
  });
}

export default REACT_SENTRY_ENABLE ? Sentry : undefined
