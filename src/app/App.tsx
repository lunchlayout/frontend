import {ReduxProvider, RouterProvider} from "."
import "@styles/globals.scss"

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
