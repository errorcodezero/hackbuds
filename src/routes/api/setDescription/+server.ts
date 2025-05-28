import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { error, type RequestHandler } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';
import { z } from 'zod/v4';

const schema = z.object({
	description: z.string().max(150)
});

export const POST: RequestHandler = async ({ locals, request }) => {
	const data = request.json();
	schema.safeParse();
	return new Response(JSON.stringify({}));
};
