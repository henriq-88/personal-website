declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: `development` | `test` | `production`;
      NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT: string;
      NEXT_PUBLIC_FIREBASE_API_KEY: string;
      NEXT_PUBLIC_FIREBASE_APP_ID: string;
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
      NEXT_PUBLIC_FIREBASE_DATABASE_URL: string;
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
      NEXT_PUBLIC_GIT_HASH?: string;
      SENDGRID_API_KEY: string;
    }
  }
}

export {};
