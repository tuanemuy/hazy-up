import { z } from "zod";

export const editProjectSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
});

export const addPageSchema = z.object({
  projectId: z.string().cuid(),
  path: z.string().regex(/^[0-9a-zA-Z\-_]+$/),
  name: z.string(),
});

export const removePageSchema = z.object({
  id: z.string().cuid(),
});

export const editColorPaletteSchema = z.object({
  id: z.string().cuid(),
  theme: z.string().regex(/^#([a-f0-9]{6}|[a-f0-9]{3})$/),
  accent: z.string().regex(/^#([a-f0-9]{6}|[a-f0-9]{3})$/),
  background: z.string().regex(/^#([a-f0-9]{6}|[a-f0-9]{3})$/),
  black: z.string().regex(/^#([a-f0-9]{6}|[a-f0-9]{3})$/),
  white: z.string().regex(/^#([a-f0-9]{6}|[a-f0-9]{3})$/),
});

export const editBaseSizeSchema = z.object({
  id: z.string().cuid(),
  grid: z.string().regex(/^[0-9]+(\.[0-9]+)?(px|pt|rem)$/),
  box: z.string().regex(/^[0-9]+(\.[0-9]+)?(px|pt|rem)$/),
});
