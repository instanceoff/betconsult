import { z } from "zod";
import { RespondSchema } from "~/schemas/response";

export function createResponseSchema<ResponseType extends z.ZodTypeAny>(
  itemSchema: ResponseType,
) {
  return RespondSchema.extend({ response: z.array(itemSchema) });
}
