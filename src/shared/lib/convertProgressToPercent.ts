import { IntRange } from "@shared/types";

function convertProgressToPercent(progress: number, max: number) {
	return Math.round((progress / max) * 100) as IntRange<0, 100>;
}

export { convertProgressToPercent };
