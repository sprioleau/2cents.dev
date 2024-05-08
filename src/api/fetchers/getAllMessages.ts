import { Message, RequestResult } from "../../types";

export default async function getAllMessages(): Promise<RequestResult<Message[]>> {
	try {
		const response = await fetch("http://localhost:3001/getComments");

		if (!response.ok) {
			throw new Error("There was an error while attempting to retrieve messages");
		}

		const data = await response.json();

		return { data, error: null };
	} catch (caughtError) {
		return { data: null, error: caughtError as Error };
	}
}
