// Basically how much the rating can affect the score. In this case, it maxes out at 8 points which can be earned or lost per match.
// Using a low k factor since people can go thru a ton of matches
const K_FACTOR = 8;

interface Match {
	userRating: number;
	otherRating: number;
}

/*
* Essentially the chance that someone likes the other person and ends up matching
*/
function calculateScore(userRating: number, otherPersonRating: number) {
	return 1 / (1 + Math.pow(10, (otherPersonRating - userRating) / 400));
}

function newRating(userRating: number, otherPersonRating: number, userWon: boolean): Match {
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
