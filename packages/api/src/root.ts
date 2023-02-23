import { createTRPCRouter } from "./trpc";
import { authRouter } from "./router/auth";
import { contactRouter } from "./router/contact";
import { projectRouter } from "./router/project";
import { categoryRouter } from "./router/category";
import { tagRouter } from "./router/tag";
import { healthRouter } from "./router/site";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  contact: contactRouter,
  project: projectRouter,
  category: categoryRouter,
  tag: tagRouter,
  health: healthRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
