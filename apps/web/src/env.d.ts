declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      NODE_ENV: `development` | `test` | `production`;
      STRIPE_SECRET_KEY: string;
      STRIPE_WEBHOOK_KEY: string;
      DATABASE_URL: string;
      NEXT_PUBLIC_GIT_HASH?: string;
      NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT: string;
      SENDGRID_API_KEY: string;
    }
  }
}

export {};
