import { z } from "zod";
import { messageSchema } from "../lib/zod/schemas";

export type Message = z.infer<typeof messageSchema>;

export type RequestResult<T> =
	| {
			data: T;
			error: null;
	  }
	| {
			data: null;
			error: Error;
	  };
