import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(2).max(100),
        email: z.string().email().max(100),
        message: z.string().min(10).max(1000),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.sendGrid.sendMessage(input);
    }),
});
