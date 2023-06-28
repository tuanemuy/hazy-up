import { z } from "zod";

export const addProjectSchema = z.object({
  name: z.string(),
});
