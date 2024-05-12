"use client";

import { createComment } from "@/actions";
import { messageFormDataSchema } from "@/lib/zod/schemas";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { z } from "zod";
import Button from "../Button";
import styles from "./index.module.scss";

export default function MessageForm() {
	const [errorMessages, setErrorMessages] = useState<
		Record<keyof z.infer<typeof messageFormDataSchema>, string | undefined>
	>({
		name: undefined,
		message: undefined,
	});

	const formRef = useRef<HTMLFormElement>(null);

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

	async function handleCreateComment(formData: FormData) {
		await createComment(formData);
		formRef.current?.reset();
	}

	return (
		<form
			action={handleCreateComment}
			ref={formRef}
			className={styles["form"]}
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
				type="submit"
				addedClassName={styles["submit-button"]}
			>
				Add your 2 cents
				<Send className={styles["submit-button-icon"]} />
			</Button>
		</form>
	);
}
