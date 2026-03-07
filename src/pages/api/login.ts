import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
    const { password } = await request.json();

    if (password === import.meta.env.PORTFOLIO_PASSWORD) {
        cookies.set("authorized", "true", {
            path: "/",
            httpOnly: true,
            maxAge: 60 * 60 * 24,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: false }), { status: 401 });
};