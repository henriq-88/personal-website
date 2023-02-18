import { createTRPCRouter } from "./trpc";
import { authRouter } from "./router/auth";
import { contactRouter } from "./router/contact";
import { projectRouter } from "./router/project";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  contact: contactRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
