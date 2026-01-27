import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	loader: async () => {
		return { hello: "Algo" };
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { hello } = Route.useLoaderData();
	return <div>Hello "/"! {hello}</div>;
}
