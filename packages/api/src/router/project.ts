import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z
        .object({
          sortBy: z
            .object({
              value: z.enum([`date`, `pageViews`, `name`]),
              order: z.enum([`asc`, `desc`]),
            })
            .optional(),
          categoryId: z.string().optional(),
          tagIds: z.array(z.string()).optional(),
          search: z.string().optional(),
        })
        .optional(),
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.project.findMany({
        ...(input?.sortBy?.value
          ? {
              orderBy: {
                [input.sortBy?.value]: input.sortBy?.order,
              },
            }
          : {}),
        where: {
          AND: {
            category: {
              id: input?.categoryId,
            },
            tags: {
              some: {
                id: {
                  in: input?.tagIds,
                },
              },
            },
            OR: [
              {
                name: {
                  contains: input?.search,
                },
              },
              {
                category: {
                  name: {
                    contains: input?.search,
                  },
                },
              },
              {
                tags: {
                  some: {
                    name: {
                      contains: input?.search,
                    },
                  },
                },
              },
            ],
          },
        },
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
