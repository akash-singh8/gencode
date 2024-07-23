import { z } from "zod";

const userDetailsSchema = z.object({
  email: z.string().email("Invalid email address."),
  name: z.string().min(3, "Name must be at least 3 characters long."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
});

export default userDetailsSchema;
