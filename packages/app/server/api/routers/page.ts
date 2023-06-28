import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const pageRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        projectId: z.string().cuid(),
        page: z.number().min(0).default(0),
        perPage: z.number().min(1).default(10),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.db.page.findMany({
        where: { projectId: input.projectId },
        skip: input.perPage * input.page,
        take: input.perPage,
      });
    }),
  byId: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const page = await ctx.db.page.findUnique({
        where: { ...input },
      });

      if (!page) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return page;
    }),
});
