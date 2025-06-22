import { db } from '$lib/server/db';
import { accounts, users } from '$lib/server/db/schema';
import { error, type RequestHandler } from '@sveltejs/kit';
import { sql, eq, not } from 'drizzle-orm';

export const GET: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session || !session.user || !session.user.id) {
		throw error(401);
	}
	const selection = await db
		.select({
			id: users.id,
			name: users.name,
			description: users.description,
			image: users.image,
			colors: users.colors,
			link: users.link
		})
		.from(users)
		.where(not(eq(users.id, session.user.id)))
		.orderBy(sql`RANDOM()`)
		.limit(1);
	const slackId = await db
		.select({ id: accounts.providerAccountId })
		.from(accounts)
		.where(eq(accounts.userId, selection[0].id));

	const user = selection[0];
	return new Response(JSON.stringify({ ...user, slackId }));
};
