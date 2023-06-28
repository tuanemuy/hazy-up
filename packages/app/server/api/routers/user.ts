import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
  protectedAdminProcedure,
} from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  edit: protectedAdminProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        role: z.union([z.literal("USER"), z.literal("ADMIN")]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.update({
        where: { id: input.id },
        data: { role: input.role },
      });

      return user;
    }),
  list: protectedAdminProcedure
    .input(
      z.object({
        page: z.number().min(0).default(0),
        perPage: z.number().min(1).default(30),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.db.user.findMany({
        skip: input.perPage * input.page,
        take: input.perPage,
      });
    }),
  byId: protectedAdminProcedure
    .input(
      z.object({
        id: z.string().cuid(),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { ...input },
      });

      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return user;
    }),
});
