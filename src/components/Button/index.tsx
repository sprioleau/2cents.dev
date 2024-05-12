"use client";

import styles from "./index.module.scss";

type Props = {
	variant?: "primary";
	addedClassName?: string;
} & React.ComponentProps<"button">;

export default function Button({ variant = "primary", addedClassName, children, ...props }: Props) {
	return (
		<button
			className={[styles["button"], addedClassName ? addedClassName : ""].join(" ")}
			data-variant={variant}
			{...props}
		>
			{children}
		</button>
	);
}
