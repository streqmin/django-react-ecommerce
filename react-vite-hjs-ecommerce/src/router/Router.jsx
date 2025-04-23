import { createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Mainpage></Mainpage>,
    loader: () => '메인페이지',
  },
]

const router = createBrowserRouter(routes)

export { router, routes }
