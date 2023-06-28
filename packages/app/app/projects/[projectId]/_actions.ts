"use server";

import { revalidatePath } from "next/cache";
import { createAction, protectedProcedure } from "@/server/api/trpc";
import {
  editProjectSchema,
  addPageSchema,
  removePageSchema,
  editColorPaletteSchema,
  editBaseSizeSchema,
} from "./_schema";

export const editProject = createAction(
  protectedProcedure
    .input(editProjectSchema)
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.db.project.update({
        where: {
          id: input.id,
        },
        data: { ...input },
      });
      revalidatePath("/projects/[projectId]");
      return project;
    })
);

export const addPage = createAction(
  protectedProcedure.input(addPageSchema).mutation(async ({ ctx, input }) => {
    const page = await ctx.db.page.create({
      data: {
        ...input,
        nodeMap: "",
      },
    });
    revalidatePath("/projects/[projectId]");
    return page;
  })
);

export const removePage = createAction(
  protectedProcedure
    .input(removePageSchema)
    .mutation(async ({ ctx, input }) => {
      const page = await ctx.db.page.delete({
        where: { id: input.id },
      });
      revalidatePath("/projects/[projectId]");
      return page;
    })
);

export const editColorPalette = createAction(
  protectedProcedure
    .input(editColorPaletteSchema)
    .mutation(async ({ ctx, input }) => {
      const colorPalette = await ctx.db.colorPalette.update({
        where: {
          id: input.id,
        },
        data: { ...input },
      });
      revalidatePath("/projects/[projectId]");
      return colorPalette;
    })
);

export const editBaseSize = createAction(
  protectedProcedure
    .input(editBaseSizeSchema)
    .mutation(async ({ ctx, input }) => {
      const baseSize = await ctx.db.colorPalette.update({
        where: {
          id: input.id,
        },
        data: { ...input },
      });
      revalidatePath("/projects/[projectId]");
      return baseSize;
    })
);
