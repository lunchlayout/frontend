import {
	createBrowserRouter,
	RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { Cafe, Dish, Entry, Review, NotFound } from "@pages/index";

const router = createBrowserRouter([
	{
		path: "*",
		element: <NotFound.NotFoundPage />,
	},
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
						path: "model",
						element: <Dish.ModelPage />,
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
