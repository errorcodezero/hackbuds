import { SvelteKitAuth } from "@auth/sveltekit"
import Slack from "@auth/sveltekit/providers/slack"
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "$lib/server/db"

export const { handle, signIn, signOut } = SvelteKitAuth(
	{
		adapter: DrizzleAdapter(db),
		providers: [
			Slack
		],
		debug: true,
		trustHost: true,
	}
)
