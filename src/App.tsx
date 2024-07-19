import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from './pages/home'
import { ErrorPage } from './error-page'
import { About } from './pages/about'
import { Application } from './pages/application'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/application',
    element: <Application />,
  },
])


export function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

