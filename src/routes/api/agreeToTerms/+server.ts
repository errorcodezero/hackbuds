import { db } from "$lib/server/db";
import { users } from "$lib/server/db/schema";
import { error, type RequestHandler } from "@sveltejs/kit"
import { eq } from "drizzle-orm";

export const POST: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session || !session.user?.id) {
		throw error(401);
	}
	await db
		.update(users)
		.set({ agreedToTerms: true })
		.where(eq(users.id, session.user?.id));

	return new Response("OK");
}
