import { z } from "zod";

export const messageFormDataSchema = z.object({
	name: z.string().trim().min(1, { message: "Name is required." }),
	message: z.string().trim().min(1, { message: "Message is required." }),
});

export const messageSchema = z.intersection(
	z.object({
		id: z.number(),
		created: z.string(),
	}),
	messageFormDataSchema
);
