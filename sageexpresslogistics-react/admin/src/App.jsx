import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Layout from './layout/layout';



import './App.css'

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
                    <Route path='/' element={<Layout/>}>

                    </Route>
  ))
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
