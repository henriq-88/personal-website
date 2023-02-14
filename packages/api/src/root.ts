import { createTRPCRouter } from "./trpc";
import { contactRouter } from "./router/contact";
import { authRouter } from "./router/auth";

export const appRouter = createTRPCRouter({
  contact: contactRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
