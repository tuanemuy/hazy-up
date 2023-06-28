import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const colorPaletteRouter = createTRPCRouter({
  byProjectId: protectedProcedure
    .input(
      z.object({
        projectId: z.string().cuid(),
      })
    )
    .query(async ({ ctx, input }) => {
      const colorPalette = await ctx.db.colorPalette.findUnique({
        where: { projectId: input.projectId },
      });

      if (!colorPalette) {
        return ctx.db.colorPalette.create({
          data: {
            projectId: input.projectId,
            theme: "#305973",
            accent: "#ef7e56",
            background: "#ded5c4",
            black: "#212121",
            white: "#f9f9f9",
          },
        });
      }

      return colorPalette;
    }),
  byId: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const colorPalette = await ctx.db.colorPalette.findUnique({
        where: { ...input },
      });

      if (!colorPalette) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return colorPalette;
    }),
});
