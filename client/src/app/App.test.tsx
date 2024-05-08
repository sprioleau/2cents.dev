import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders title", () => {
	render(<App />);
	const subtitle = screen.getByText(/Share your thoughts/i);

	expect(subtitle).toBeDefined();
});

it("renders section titles", () => {
	render(<App />);
	const newMessageSectionTitle = screen.getByText(/New Message/i);
	const MessagesSectionTitle = screen.getByText(/New Message/i);

	expect(newMessageSectionTitle).toBeDefined();
	expect(MessagesSectionTitle).toBeDefined();
});
