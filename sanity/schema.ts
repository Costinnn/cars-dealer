import { type SchemaTypeDefinition } from "sanity";

import { carPostSchema } from "./schemas/carPostSchema";
import { salesAgentSchema } from "./schemas/salesAgentSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carPostSchema, salesAgentSchema],
};
