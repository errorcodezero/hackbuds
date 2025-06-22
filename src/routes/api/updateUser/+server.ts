import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { error, type RequestHandler } from '@sveltejs/kit';
import { z } from 'zod/v4';
import { eq } from 'drizzle-orm';

const schema = z.object({
	description: z.string().max(150).optional(),
	colors: z.string().array().optional(),
	link: z.url().optional(),
	image: z.url().optional()
});

export const POST: RequestHandler = async ({ locals, request }) => {
	const req = await request.json();
	const session = await locals.auth();
	console.log(req);
	const body = schema.safeParse(req);
	console.log(body);
	if (!session || !session.user || !session.user.email || !session.user.id) {
		return error(401);
	}
	let userList = await db.select().from(users).where(eq(users.email, session.user.email)).limit(1);
	let user = userList[0];
	if (!body.data || body.error) {
		return new Response(JSON.stringify(body.error));
	}

	if (body.data.description) {
		user.description = body.data.description;
	}
	if (body.data.link) {
		user.link = body.data.link;
	}
	if (body.data.image) {
		user.image = body.data.image;
	}

	return new Response(JSON.stringify('OK'));
};
