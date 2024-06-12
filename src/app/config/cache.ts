import { ICacheConfig } from "@app/types";
import { createPathURL } from "@shared/lib";

const CACHE_VERSION = "1.0.0";

const CacheConfig: ICacheConfig = {
	document: {
		name: `${CACHE_VERSION}:document`,
		resources: [""],
	},
	style: {
		name: `${CACHE_VERSION}:style`,
		resources: [],
	},
	image: {
		name: `${CACHE_VERSION}:image`,
		resources: [
			...[
				"entryGirl.png",
				"appleFaviconPlate.png",
				"faviconPlate.ico",
				"storyGirl.png",
				"quizGirl.png",
				"reviewSubmissionPeople.png",
				"noResultsFoundDelivery.png",
				"benefitsLaptop.png",
				"404Robot.png",
				"progressCar.png",
				"woodTexture.jpg",
			].map(resource => createPathURL("images", resource)),
			...[
				"dishPage.png",
				"modelPageDesktop.png",
				"modelPageMobile.png",
			].map(resource => createPathURL("images", "screenshots", resource)),
		],
	},
	font: {
		name: `${CACHE_VERSION}:font`,
		resources: [
			"Gilroy/Gilroy-Regular.woff2",
			"Gilroy/Gilroy-Bold.woff2",
			"Gilroy/Gilroy-Semibold.woff2",
		].map(resource => createPathURL("fonts", resource)),
	},
	script: {
		name: `${CACHE_VERSION}:script`,
		resources: [],
	},
	manifest: {
		name: `${CACHE_VERSION}:manifest`,
		resources: ["/manifest.json"],
	},
};

export { CacheConfig, CACHE_VERSION };
