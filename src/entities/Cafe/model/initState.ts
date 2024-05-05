import { ICafesState } from "../types";

const initialState: ICafesState = {
	isLoading: false,
	errors: [],
	cafe: {
		name: "test",
		logo: "test",
		dishes: [
			{
				dishId: "234",
				name: "Клубничный торт",
				amount: 1000,
				unit: "г",
				img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
			},
			{
				dishId: "234",
				name: "Клубничный торт",
				amount: 1000,
				unit: "г",
				img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
			},
			{
				dishId: "234",
				name: "Клубничный торт",
				amount: 1000,
				unit: "г",
				img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
			},
		],
	},
	currentPage: 1,
	pageCnt: 0,
};

export { initialState };
