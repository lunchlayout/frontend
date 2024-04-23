import {ReduxProvider, RouterProvider} from "."


function App() {
  
  return (
    <>
      <ReduxProvider>
        <RouterProvider/>
      </ReduxProvider>
    </>
  )
}

export default App
