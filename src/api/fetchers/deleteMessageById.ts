import { Message, RequestResult } from "../../types";

export default async function deleteMessageById(id: Message["id"]): Promise<RequestResult<unknown>> {
	try {
		const response = await fetch("http://localhost:3001/deleteComment", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ id }),
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
