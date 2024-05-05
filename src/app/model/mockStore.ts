import { IRootState } from "@app/types";
import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./store";
import logger from "redux-logger";

const mockState: IRootState = {
	dishes: {
		isLoading: false,
		errors: [],
		dish: {
			name: "Клубничный торт",
			cafeId: "123456",
			description:
				"Нежный клубничный торт - сладкая симфония ароматной клубники",
			allergens: ["Сахар"],
			ingredients: ["Сливки", "Клубника"],
			nutritionalValue: {
				fats: 200,
				calories: 450,
				carbohydrates: 250,
				proteins: 50,
			},
			amount: 1000,
			unit: "г",
			img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
			content: {
				modelLink:
					"/assets/models/2cf4a4a9644e33ea3954da77ae50ce92f41ce8623ed56c0ef8fcb3b71b507a72/model.gltf",
				stories: [
					{
						description:
							"Клубничный торт - самый любимый десерт Павла Дурова",
						img: "/assets/images/c82cd98d0f0ab87cb72fd4526c738cfaf37d67ffe3a5a7a692d5cfa32f12da87.jpg",
					},
				],
				videos: [
					{
						title: "Клубничный торт",
						link: "https://www.youtube.com/embed/fXsnmqbgvYw",
					},
				],
				quetions: [
					{
						text: "Сколько выпекается клубничный торт",
						answer: "40 минут",
						options: ["40 минут", "30 минут", "20 минут"],
					},
				],
			},
		},
	},
	cafes: {
		currentPage: 1,
		pageCnt: 5,
		isLoading: false,
		errors: [],
		cafe: {
			name: "Кекс и крендель",
			logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
			dishes: [
				{
					dishId: "12345",
					name: "Клубничный торт",
					amount: 1000,
					unit: "г",
					img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
				},
				{
					dishId: "123456",
					name: "Клубничный торт",
					amount: 1000,
					unit: "г",
					img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
				},
				{
					dishId: "1234567",
					name: "Клубничный торт",
					amount: 1000,
					unit: "г",
					img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
				},
			],
		},
	},
};

const mockStore = configureStore({
	preloadedState: mockState,
	reducer: mainReducer,
	middleware: getDefaultMiddl => getDefaultMiddl().concat(logger),
});

export { mockStore };
