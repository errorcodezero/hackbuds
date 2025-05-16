import { SvelteKitAuth } from "@auth/sveltekit"
import Slack from "@auth/sveltekit/providers/slack"
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "$lib/server/db"
import { AUTH_SLACK_ID, AUTH_SLACK_SECRET } from "$env/static/private";

export const { handle, signIn, signOut } = SvelteKitAuth(
	{
		adapter: DrizzleAdapter(db),
		providers: [
			Slack({
				clientId: AUTH_SLACK_ID,
				clientSecret: AUTH_SLACK_SECRET,
			})
		],
		debug: true,
		trustHost: true,
	}
)
