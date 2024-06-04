import { IRootState } from "@app/types";
import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./store";

const mockState: IRootState = {
	dishesSlice: {
		isLoading: false,
		errors: [],
		modelLoadingProgress: {
			value: 1,
			max: 200,
		},
		entertainmentDetails: {
			currentEntIdx: 0,
		},
		dish: {
			name: "Клубничный торт",
			cafe: {
				cafeId: "123456",
				logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
				name: "Кекс и крендель",
			},
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
			modelLink:
				"http://localhost:5000/assets/models/2cf4a4a9644e33ea3954da77ae50ce92f41ce8623ed56c0ef8fcb3b71b507a72/model.gltf",
			entertainment: [
				{
					description:
						"Клубничный торт - самый любимый десерт Павла Дурова",
				},
				{
					title: "Клубничный торт",
					link: "https://www.youtube.com/embed/fXsnmqbgvYw",
				},
				{
					question: "Сколько выпекается клубничный торт",
					answer: "40 минут",
					options: ["40 минут", "30 минут", "20 минут"],
				},
			],
		},
	},
	cafesSlice: {
		isLoading: false,
		errors: [],
		currentCafes: {
			pageCnt: 1,
			cafes: [
				{
					cafeId: "123",
					name: "Кекс и крендель",
					logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
				},
				{
					cafeId: "1234",
					name: "Кекс и крендель",
					logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
				},
				{
					cafeId: "12345",
					name: "Кекс и крендель",
					logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
				},
				{
					cafeId: "123456",
					name: "Кекс и крендель",
					logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
				},
			],
		},
		currentCafe: {
			pageCnt: 5,
			name: "Кекс и крендель",
			logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
			dishes: [
				{
					dishId: "12345",
					name: "Греческий салат с авокадо и тунцом",
					amount: 400,
					unit: "г",
					description:
						"Изумительный салат, в состав которого входят самые свежие продукты",
					img: "https://bye-bye-calories.ru/wp-content/uploads/1/c/1/1c14a5995fbf1b48e341e5fee35c1d55.jpeg",
				},
				{
					dishId: "123456",
					name: "Греческий салат с авокадо и тунцом",
					amount: 400,
					unit: "г",
					description:
						"Изумительный салат, в состав которого входят самые свежие продукты",
					img: "https://bye-bye-calories.ru/wp-content/uploads/1/c/1/1c14a5995fbf1b48e341e5fee35c1d55.jpeg",
				},
				{
					dishId: "1234567",
					name: "Греческий салат с авокадо и тунцом",
					amount: 400,
					unit: "г",
					description:
						"Изумительный салат, в состав которого входят самые свежие продукты",
					img: "https://bye-bye-calories.ru/wp-content/uploads/1/c/1/1c14a5995fbf1b48e341e5fee35c1d55.jpeg",
				},
				{
					dishId: "12345678",
					name: "Греческий салат с авокадо и тунцом",
					amount: 400,
					unit: "г",
					description:
						"Изумительный салат, в состав которого входят самые свежие продукты",
					img: "https://bye-bye-calories.ru/wp-content/uploads/1/c/1/1c14a5995fbf1b48e341e5fee35c1d55.jpeg",
				},
			],
		},
	},
};

const mockStore = configureStore({
	preloadedState: mockState,
	reducer: mainReducer,
});

export { mockStore };
