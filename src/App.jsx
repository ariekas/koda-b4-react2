import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { DetailPage } from "./pages/DetailPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/detail/:id",
    element: <DetailPage/>
  }
])

function App(){
  return(
    <RouterProvider router={router}/>
  )
}

export default App

