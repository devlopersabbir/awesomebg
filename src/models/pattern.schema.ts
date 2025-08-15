import { z } from "zod";

export const patternSchema = z.object({
  id: z.string(),
  name: z.string(),
  badge: z.string(),
  category: z.string(),
  description: z.string(),
  code: z.string(),
  style: z.object({
    background: z.string(),
  }),
  publish: z.boolean().optional().default(true),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type PatternSchema = z.infer<typeof patternSchema>;
