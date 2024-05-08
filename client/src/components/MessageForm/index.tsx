import styles from "./index.module.scss";

import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { z } from "zod";
import { api } from "../../api";
import useMessages from "../../hooks/useMessages";
import { messageFormDataSchema } from "../../lib/zod/schemas";
import Button from "../Button";

export default function MessageForm() {
	const [errorMessages, setErrorMessages] = useState<
		Record<keyof z.infer<typeof messageFormDataSchema>, string | undefined>
	>({
		name: undefined,
		message: undefined,
	});

	const formRef = useRef<HTMLFormElement>(null);
	const { refetch } = useMessages();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const formDataObject = Object.fromEntries(formData.entries());

		const parsedFormData = messageFormDataSchema.safeParse(formDataObject);

		if (!parsedFormData.success) {
			const errorsByField = parsedFormData.error.flatten().fieldErrors;

			return setErrorMessages({
				name: errorsByField.name?.join(", "),
				message: errorsByField.message?.join(", "),
			});
		}

		// Attempt to create a message
		await api.createMessage(parsedFormData.data);

		// Reset form
		formRef?.current?.reset();

		// Refetch messages
		refetch();
	}

	function handleValidateName({ target: { value } }: React.FocusEvent<HTMLInputElement>) {
		const newErrorValue = !value || value.length < 1 ? "Name is required" : undefined;

		setErrorMessages((previousErrorMessages) => ({
			...previousErrorMessages,
			name: newErrorValue,
		}));
	}

	function handleValidateMessage({ target: { value } }: React.FocusEvent<HTMLTextAreaElement>) {
		const newErrorValue = !value || value.length < 1 ? "Comment is required" : undefined;

		setErrorMessages((previousErrorMessages) => ({
			...previousErrorMessages,
			message: newErrorValue,
		}));
	}

	return (
		<form
			className={styles["form"]}
			onSubmit={handleSubmit}
			ref={formRef}
		>
			<fieldset className={styles["fieldset"]}>
				<label
					htmlFor="name"
					className={styles["label"]}
				>
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Enter your name"
					onBlur={handleValidateName}
				/>
				<div className={styles["error-message-wrapper"]}>
					{errorMessages.name && <p className={styles["error-message"]}>{errorMessages.name}</p>}
				</div>
			</fieldset>
			<fieldset className={styles["fieldset"]}>
				<label
					htmlFor="message"
					className={styles["label"]}
				>
					Message
				</label>
				<textarea
					name="message"
					id="message"
					rows={3}
					placeholder="Your message"
					maxLength={240}
					onBlur={handleValidateMessage}
				/>
				<div className={styles["error-message-wrapper"]}>
					{errorMessages.message && <p className={styles["error-message"]}>{errorMessages.message}</p>}
				</div>
			</fieldset>
			<Button
				addedClassName={styles["submit-button"]}
				type="submit"
			>
				Add your 2 cents
				<Send className={styles["submit-button-icon"]} />
			</Button>
		</form>
	);
}
