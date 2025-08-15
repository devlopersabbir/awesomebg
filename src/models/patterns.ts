import { Model, model, models, Schema } from "mongoose";
import { PatternSchema } from "./pattern.schema";

const schema = new Schema<PatternSchema>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    style: {
      background: { type: String, required: true },
    },
    publish: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const Pattern: Model<PatternSchema> =
  models.pattern || model("pattern", schema);

export default Pattern;
