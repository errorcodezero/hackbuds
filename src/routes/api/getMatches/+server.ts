import { db } from '$lib/server/db';
import { matches } from '$lib/server/db/schema';
import { error, type RequestHandler } from '@sveltejs/kit';
import { sql, eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session || !session.user || !session.user.id) {
		throw error(401);
	}
	const selection = await db
		.select()
		.from(matches)
		.where(eq(matches.initiatedId, session.user.id))

	console.log(selection);

	return new Response(JSON.stringify(selection));
};
