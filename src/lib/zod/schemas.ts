import { z } from "zod";

export const messageSchema = z.object({
	id: z.number(),
	name: z.string().trim().min(1, { message: "Name is required." }),
	message: z.string().trim().min(1, { message: "Message is required." }),
	createdAt: z.date(),
});

export const messageFormDataSchema = messageSchema.pick({
	name: true,
	message: true,
});

export const deleteMessageSchema = z.object({
	id: z.coerce.number(),
});
