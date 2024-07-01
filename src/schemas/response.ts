import { z } from "zod";

export function createResponseSchema<ResponseType extends z.ZodTypeAny>(
  itemSchema: ResponseType,
) {
  return RespondSchema.extend({ response: z.array(itemSchema) });
}

export const RespondSchema = z.object({
  errors: z.unknown().array().or(z.instanceof(Object)),
  get: z.string(),
  parameters: z.instanceof(Object),
  results: z.number(),
  paging: z.object({
    current: z.number(),
    total: z.number(),
  }),
});
export type ApiRespond = z.TypeOf<typeof RespondSchema>;
