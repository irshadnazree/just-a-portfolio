import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	loader: async () => {
		const res = await fetch("/api/data");
		if (!res.ok) {
			throw new Error("Unexpected status code");
		}

		const data = await res.json();

		return data;
	},
	component: App,
});

function App() {
	const users = Route.useLoaderData();

	console.log(users);

	return (
		<div className="min-h-screen bg-background">
			<span className="break-all font-black text-10xl/56 text-primary">
				IRSHAD
				<br />
				NAZREE
			</span>
		</div>
	);
}
