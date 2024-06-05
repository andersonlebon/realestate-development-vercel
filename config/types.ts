declare global {
  interface Config {
      api: {
          backendUrl: string;
      };
      captcha_enabled: boolean;
      captcha_key?: string;
      google_maps_api_key?: string;
      react_sentry_enable: boolean;
      react_sentry_environment?: string;
      react_sentry_dsn?: string;
  }

  interface Window {
      env: Config;
  }
}

export {};