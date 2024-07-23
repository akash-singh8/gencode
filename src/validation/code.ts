import { z } from "zod";

const codeSchema = z.object({
  filename: z.string().min(3, "Filename is required."),
  input: z.string().optional(),
  code: z.string().min(1, "Code is required."),
});

export default codeSchema;
