import { db } from "$lib/server/db";
import { users } from "$lib/server/db/schema";
import { error, type RequestHandler } from "@sveltejs/kit"
import { eq } from "drizzle-orm";

export const DELETE: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session || !session.user || !session.user.email) {
		return error(401);
	}
	await db.delete(users).where(eq(users.email, session.user.email));
	return new Response("OK");
}
