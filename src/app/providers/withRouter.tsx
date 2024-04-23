import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
            },
            {
                path: 'scan'
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
                    },
                    {
                        path: 'model'
                    },
                    {
                        path: 'ar'
                    }
                ]
            }
        ]
    },
    {
        path: '/cafes',
        children: [
            {
                path: ':cafeId'
            }
        ]
    },
    {
        path: '/reviews'
    }
])

function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export {Router}

