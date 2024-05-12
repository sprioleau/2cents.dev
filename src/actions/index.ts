"use server";

import { db } from "@/db";
import { comments } from "@/db/schema";
import { deleteMessageSchema, messageFormDataSchema } from "@/lib/zod/schemas";
import getParsedFormData from "@/utils/getParsedFormData";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createComment(formData: FormData) {
	try {
		const parsedFormData = getParsedFormData({ formData, schema: messageFormDataSchema });
		await db.insert(comments).values(parsedFormData);
		revalidatePath("/");
	} catch (caughtError) {
		throw new Error("There was a problem creating your comment.");
	}
}

export async function deleteComment(formData: FormData) {
	try {
		const parsedFormData = getParsedFormData({ formData, schema: deleteMessageSchema });
		await db.delete(comments).where(eq(comments.id, parsedFormData.id));
		revalidatePath("/");
	} catch (caughtError) {
		console.error(caughtError);
		throw new Error("There was a problem deleting your comment.");
	}
}
