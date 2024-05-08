import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getAllMessages as getAllMessagesFromApi } from "../api/fetchers";
import { Message } from "../types";

type MessagesContextType = {
	messages: Message[];
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
	refetch: () => void;
};

const MessagesContext = createContext<MessagesContextType>({
	messages: [],
	setMessages: () => {},
	refetch: () => {},
});

export function MessagesProvider({ children }: { children: React.ReactNode }) {
	const [messages, setMessages] = useState<Message[]>([]);

	const getAllMessages = useCallback(() => {
		getAllMessagesFromApi().then(({ data, error }) => {
			if (error) {
				return console.error(error);
			}

			setMessages(data);
		});
	}, []);

	useEffect(() => {
		getAllMessages();
	}, [getAllMessages]);

	return (
		<MessagesContext.Provider value={{ messages, setMessages, refetch: getAllMessages }}>
			{children}
		</MessagesContext.Provider>
	);
}

export default function useMessages() {
	return useContext(MessagesContext);
}
