/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

async function loadPage(database, page_key) {
	const html_key = page_key;

	try {
		const obj = await database.get(html_key);

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
}

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

				if (userID == "0") {
					return Response.json({
						error: "Live user ID cannot be 0"
					}, { status: 400 });
				}

				const user = await env.DELTEAMS_IDENTITY
					.prepare(`
						SELECT id, username, created_at, common_identity
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

			if (parts[2] === "auth") { // Operate auth
				if (parts[3] === "login") {
					// Placeholder for login operations
					return Response.json({
						message: "Login endpoint is under construction"
					});
				}

				if (parts[3] === "register") {
					// Placeholder for register operations
					return Response.json({
						message: "Register endpoint is under construction"
					});
				}

				if (parts[3] === "logout") {
					// Placeholder for logout operations
					return Response.json({
						message: "Logout endpoint is under construction"
					});
				}
			}

			if (parts[2] === "teams") { // Operate teams
				// Placeholder for teams operations
				return Response.json({
					message: "Teams endpoint is under construction"
				});
			}

			return new Response("API endpoint not found", { status: 404 });
		}

		await loadPage(env.CORE_ASSETS, "html_pages/about.html");
	},
};
