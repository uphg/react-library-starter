import Home from './pages/Home'
import { createHashRouter, RouterProvider, RouteObject } from 'react-router-dom'
import { ReactNode } from 'react'
import Content from './components/Content'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
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
      <div className="pl[var(--sidebar-width)]">
        <div className="">
          <div className="">
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
}, ...createLayoutRouter([
  { path: '/docs', element: <PagesButton /> },
  { path: '/docs/button', element: <PagesButton /> }
])])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
