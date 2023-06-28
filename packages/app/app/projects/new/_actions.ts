"use server";

import { revalidatePath } from "next/cache";
import { createAction, protectedProcedure } from "@/server/api/trpc";
import { addProjectSchema } from "./_schema";

export const addProject = createAction(
  protectedProcedure
    .input(addProjectSchema)
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.db.project.create({
        data: { ...input, userId: ctx.session.user.id },
      });
      revalidatePath("/projects");
      console.log(project);
      return project;
    })
);
