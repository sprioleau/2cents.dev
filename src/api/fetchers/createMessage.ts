import { z } from "zod";
import { messageFormDataSchema } from "../../lib/zod/schemas";
import { Message, RequestResult } from "../../types";

export default async function createMessage({
	name,
	message,
}: z.infer<typeof messageFormDataSchema>): Promise<RequestResult<Message[]>> {
	try {
		const response = await fetch("http://localhost:3001/createComment", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ name, message }),
		});

		if (!response.ok) {
			throw new Error("There was an error while attempting to retrieve messages");
		}

		const data = await response.json();

		return { data, error: null };
	} catch (caughtError) {
		return { data: null, error: caughtError as Error };
	}
}
