import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany({
      include: {
        category: true,
        tags: true,
      },
    });
  }),
  bySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.project.findFirst({
        where: { slug: { equals: input.slug } },
        include: {
          category: true,
          tags: true,
          medias: true,
        },
      });
    }),
  increasePageViewById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.project.update({
        where: {
          id: input.id,
        },
        data: { pageViews: { increment: 1 } },
      });
    }),
});
