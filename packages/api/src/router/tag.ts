import { createTRPCRouter, publicProcedure } from "../trpc";

export const tagRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany({
      orderBy: {
        name: `asc`,
      },
    });
  }),
});
