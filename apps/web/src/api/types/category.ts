export const categories = {
  ai: `AI`,
  app: `App`,
  web: `Web`,
  model: `Model`,
  package: `Package`,
  concept: `Concept`,
} as const;

export type Category = keyof typeof categories;
