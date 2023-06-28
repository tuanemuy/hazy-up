import { userRouter } from "@/server/api/routers/user";
import { projectRouter } from "@/server/api/routers/project";
import { pageRouter } from "@/server/api/routers/page";
import { colorPaletteRouter } from "@/server/api/routers/colorPalette";
import { baseSizeRouter } from "@/server/api/routers/baseSize";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  project: projectRouter,
  page: pageRouter,
  colorPalette: colorPaletteRouter,
  baseSize: baseSizeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
