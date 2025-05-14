import { SLACK_CLIENT_ID, SLACK_CLIENT_SECRET } from "$env/static/private"
import { SvelteKitAuth } from "@auth/sveltekit"
import Slack from "@auth/sveltekit/providers/slack"

export const { handle } = SvelteKitAuth({
	providers: [
		Slack({
			clientId: SLACK_CLIENT_ID,
			clientSecret: SLACK_CLIENT_SECRET,
		})
	],
})
