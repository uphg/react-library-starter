import './styles/index.scss'
import Home from './pages/Home'
import Start from './pages/start.mdx'
import { createHashRouter, RouterProvider, RouteObject, redirect, Navigate } from 'react-router-dom'
import { ReactNode } from 'react'
import Content from './components/Content'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import pageStyles from './styles/page.module.scss'
import PagesButton from './pages/Button.mdx'

const HomeLayout = ({ children }: { children: ReactNode }) => (
  <div className="layout">
    <Navbar />
    <Content>
      {children}
    </Content>
  </div>
)

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="layout">
    <Navbar />
    <Sidebar />
    <Content>
      <div className={pageStyles.container}>
        <div className={pageStyles.wrap}>
          <div className={pageStyles.content}>
            {children}
          </div>
        </div>
      </div>
    </Content>
  </div>
)

function createLayoutRouter(routes: RouteObject[]): RouteObject[] {
  return routes.map(item => ({
    path: item.path!,
    element: (<PageLayout>{item.element}</PageLayout>)
  }))
}

const router = createHashRouter([{
  path: '/',
  element: (
    <HomeLayout>
      <Home />
    </HomeLayout>
  )
}, {
  path: '/docs',
  // Redirect 
  element: <Navigate to="/docs/button" replace />,
}, ...createLayoutRouter([
  { path: '/docs/button', element: <PagesButton /> }
])])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
