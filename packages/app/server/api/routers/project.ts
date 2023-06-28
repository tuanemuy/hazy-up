import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const projectRouter = createTRPCRouter({
  add: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.db.project.create({
        data: { ...input, userId: ctx.session.user.id },
      });
      return project;
    }),
  list: protectedProcedure
    .input(
      z.object({
        page: z.number().min(0).default(0),
        perPage: z.number().min(1).default(30),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.db.project.findMany({
        where: {
          userId: ctx.session.user.id,
        },
        skip: input.perPage * input.page,
        take: input.perPage,
      });
    }),
  byId: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const project = await ctx.db.project.findUnique({
        where: { ...input },
      });

      if (!project) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return project;
    }),
});
