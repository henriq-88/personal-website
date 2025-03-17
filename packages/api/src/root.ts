import { createTRPCRouter } from "./trpc";
import { authRouter } from "./router/auth";
import { contactRouter } from "./router/contact";
import { healthRouter } from "./router/site";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  contact: contactRouter,
  health: healthRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
