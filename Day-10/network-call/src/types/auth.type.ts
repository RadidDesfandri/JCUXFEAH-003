import { loginSchema } from "@/schemas/auth.schema";
import * as z from "zod";

type LoginData = z.infer<typeof loginSchema>;

export type { LoginData };
