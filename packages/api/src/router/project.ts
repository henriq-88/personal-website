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
  byTitleSlug: publicProcedure
    .input(
      z.object({
        projectSlug: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      console.log({ input });

      return ctx.prisma.project.findFirst({
        where: { name: { contains: input.projectSlug } },
        include: {
          category: true,
          tags: true,
          medias: true,
        },
      });
    }),
});
