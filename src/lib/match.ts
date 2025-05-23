export const K_FACTOR = 8;

export interface Match {
	userRating: number;
	otherRating: number;
}

/*
* Essentially the chance that someone likes the other person and ends up matching
*/
export function calculateScore(userRating: number, otherPersonRating: number) {
	return 1 / (1 + Math.pow(10, (otherPersonRating - userRating) / 400));
}

/*
* Uses details of match as well as the ratings of the two players to return the new ratings afterwards.
*/
export function newRating(userRating: number, otherPersonRating: number, userWon: boolean): Match {
	const score = calculateScore(userRating, otherPersonRating);
	let newUserRating = userRating;
	let newOtherPersonRating = otherPersonRating;
	if (userWon) {
		newUserRating += K_FACTOR * score;
		newOtherPersonRating -= K_FACTOR * (1 - score);
	} else {
		newUserRating -= K_FACTOR * score;
		newOtherPersonRating += K_FACTOR * (1 - score);
	}

	return {
		userRating: newUserRating,
		otherRating: newOtherPersonRating
	};
}

// Weighted system:
export function ratingWeighter(rating: number, preferences: String[], tags: String[]): number {
	for (let i = 0; i < tags.length; i++) {
		if (preferences.includes(tags[i])) {
			// huge boost since you would want someone with similar skills as you
			rating += K_FACTOR * 3;
		}
	}

	return rating;
}
