import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/data")({
	server: {
		handlers: {
			GET: async () => Response.json({ message: "hello world" }),
		},
	},
});
