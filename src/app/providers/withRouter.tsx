import {
	createBrowserRouter,
	RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { Cafe, Dish, Entry, Review } from "@pages/index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Entry.Layout />,
		children: [
			{
				index: true,
				element: <Entry.MainPage />,
			},
			{
				path: "scan",
				element: <Entry.ScanPage />,
			},
		],
	},
	{
		path: "/dishes",
		children: [
			{
				path: ":dishId",
				element: <Dish.Layout />,
				children: [
					{
						index: true,
						element: <Dish.EntertainmentPage />,
					},
					{
						path: "3d",
						element: <Dish.Model3DPage />,
					},
					{
						path: "ar",
						element: <Dish.ModelARPage />,
					},
				],
			},
		],
	},
	{
		path: "/cafes",
		element: <Cafe.Layout />,
		children: [
			{
				path: ":cafeId",
				element: <Cafe.DishesPage />,
			},
		],
	},
	{
		path: "/reviews",
		element: <Review.Layout />,
		children: [
			{
				index: true,
				element: <Review.SendingPage />,
			},
		],
	},
]);

export default function RouterProvider() {
	return <ReactRouterProvider router={router} />;
}
