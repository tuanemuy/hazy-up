import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const baseSizeRouter = createTRPCRouter({
  byProjectId: protectedProcedure
    .input(
      z.object({
        projectId: z.string().cuid(),
      })
    )
    .query(async ({ ctx, input }) => {
      const baseSize = await ctx.db.baseSize.findUnique({
        where: { projectId: input.projectId },
      });

      if (!baseSize) {
        return ctx.db.baseSize.create({
          data: {
            projectId: input.projectId,
            grid: "16px",
            box: "64px",
          },
        });
      }

      return baseSize;
    }),
  byId: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const baseSize = await ctx.db.baseSize.findUnique({
        where: { ...input },
      });

      if (!baseSize) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return baseSize;
    }),
});
