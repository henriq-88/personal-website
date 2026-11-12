declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: `development` | `test` | `production`;
      NEXT_PUBLIC_GIT_HASH?: string;
      SENDGRID_API_KEY: string;
    }
  }
}

export {};
