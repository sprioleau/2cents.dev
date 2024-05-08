import { API_ROOT_URL } from "../../constants/apiUrl";
import { Message, RequestResult } from "../../types";

export default async function getAllMessages(): Promise<RequestResult<Message[]>> {
	try {
		const response = await fetch(`${API_ROOT_URL}/api/getComments`);

		if (!response.ok) {
			throw new Error("There was an error while attempting to retrieve messages");
		}

		const data = await response.json();

		return { data, error: null };
	} catch (caughtError) {
		return { data: null, error: caughtError as Error };
	}
}
