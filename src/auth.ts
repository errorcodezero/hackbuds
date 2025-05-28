import { SvelteKitAuth } from '@auth/sveltekit';
import Slack from '@auth/sveltekit/providers/slack';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '$lib/server/db';
import {
	accounts,
	authenticators,
	sessions,
	users,
	verificationTokens
} from '$lib/server/db/schema';

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: DrizzleAdapter(db, {
		usersTable: users,
		accountsTable: accounts,
		authenticatorsTable: authenticators,
		sessionsTable: sessions,
		verificationTokensTable: verificationTokens
	}),
	providers: [Slack],
	debug: false,
	trustHost: true,
	pages: {
		newUser: '/welcoming'
	},
	callbacks: {
		async session({ session }) {
			return { ...session };
		}
	}
});
