import { SLACK_CLIENT_ID, SLACK_CLIENT_SECRET } from "$env/static/private"
import { SvelteKitAuth } from "@auth/sveltekit"
import Slack from "@auth/sveltekit/providers/slack"
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "$lib/server/db"

export const { handle } = SvelteKitAuth({
	adapter: DrizzleAdapter(db),
	providers: [
		Slack({
			clientId: SLACK_CLIENT_ID,
			clientSecret: SLACK_CLIENT_SECRET,
		})
	],
	trustHost: true
})
