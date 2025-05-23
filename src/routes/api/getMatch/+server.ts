import { db } from "$lib/server/db";
import { users } from "$lib/server/db/schema";
import { error, type RequestHandler } from "@sveltejs/kit"
import { sql } from "drizzle-orm";

export const GET: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session) {
		throw error(401);
	}
	const selection = await db.select({ id: users.id, name: users.name, description: users.description, image: users.image, tags: users.tags }).from(users).orderBy(sql`RANDOM()`).limit(1);
	const user = selection[0];
	return new Response(JSON.stringify(user));
}
