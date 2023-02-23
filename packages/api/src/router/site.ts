import { createTRPCRouter, publicProcedure } from "../trpc";

export const healthRouter = createTRPCRouter({
  check: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findFirst();
  }),
});
