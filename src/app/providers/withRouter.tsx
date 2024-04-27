import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";
import * as Pages from "../../pages";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Pages.HomePage/>
            },
            {
                path: 'scan',
                element: <Pages.ScanPage/>
            },
        ]   
    },
    {
        path: '/dishes',
        children: [
            {
                path: ':dishId',
                children: [
                    {
                        index: true,
                        element: <Pages.DishPage/>
                    },
                    {
                        path: '3d',
                        element: <Pages.Dish3DPage/>
                    },
                    {
                        path: 'ar',
                        element: <Pages.DishARPage/>
                    }
                ]
            }
        ]
    },
    {
        path: '/cafes',
        children: [
            {
                path: ':cafeId',
                element: <Pages.CafePage/>
            }
        ]
    },
    {
        path: '/reviews',
        element: <Pages.ReviewPage/>
    }
])

export default function RouterProvider() {
  return (
    <ReactRouterProvider router={router}/>
  )
}


