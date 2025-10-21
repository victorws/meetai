/** Type for the server-side configuration (never exposed to client) */
export interface ServerConfig {
  env: string;
  database: {
    url: string;
    name: string;
  };
  betterAuth: {
    secret: string;
    url: string;
  };
  github: {
    clientId: string;
    clientSecret: string;
  };
  google: {
    clientId: string;
    clientSecret: string;
  };
  stream: {
    videoApiKey: string;
    videoSecretKey: string;
    chatApiKey: string;
    chatSecretKey: string;
  };
  openai: {
    apiKey: string;
  };
  polar: {
    accessToken: string;
  };
}

/** Type for public, client-safe configuration */
export interface PublicConfig {
  app: {
    url: string;
  };
  stream: {
    videoApiKey: string;
    chatApiKey: string;
  };
}
