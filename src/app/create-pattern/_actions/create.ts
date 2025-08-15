"use server";

import { connectDatabase } from "@/configs/connect-database";
import { patternSchema, PatternSchema } from "@/models/pattern.schema";
import Pattern from "@/models/patterns";
import { revalidatePath } from "next/cache";
import { formatError } from "zod";

export const insertPattern = async (patterns: PatternSchema[]) => {
  connectDatabase();
  const create = async (input: PatternSchema) => {
    try {
      const { success, data, error } = patternSchema.safeParse(input);
      if (!success) throw new Error(JSON.stringify(formatError(error)));

      // create pattern with that validated data
      const pattern = await Pattern.findOne({ id: input.id });
      if (pattern) throw new Error("Color pattern already exist!");
      await Pattern.create(data);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  await Promise.all(
    patterns.map(async (pattern) => {
      await create(pattern);
    })
  );
  revalidatePath("/", "page");
};
