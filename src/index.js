/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const parts = url.pathname.split("/");

		if (request.method === "GET" && parts[1] === "api") {
			// API Code
			if (parts[2] === "users") { // Operate users
				const userID = parts[3];

				if (!userID) {
					return Response.json({
						error: "User ID not provided"
					}, { status: 400 });
				}

				const user = await env.DB
					.prepare(`
						SELECT id, username, created_at
						FROM users
						WHERE id = ?
					`)
					.bind(userID)
					.first();

				if (!user) {
					return Response.json({
						error: "User not found"
					}, { status: 404 });
				}

				return Response.json(user);
			}

			return new Response("API endpoint not found", { status: 404 });
		}

		const html_key = "html_pages/about.html";

		try {
			const obj = await env.CORE_ASSETS.get(html_key);

			if (obj === null) {
				return new Response("Asset not found", { status: 404 });
			}

			const headers = new Headers();
			obj.writeHttpMetadata(headers);
			headers.set("Content-Type", "text/html");
			return new Response(obj.body, { headers });

		} catch (error) {
			return new Response("Error fetching asset", { status: 500 });	
		}
	},
};
