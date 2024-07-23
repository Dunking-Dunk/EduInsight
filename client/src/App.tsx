import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ComponentsPage from './pages/ComponentsPage/ComponentsPage'
import LoadingPage from './pages/LoadingPage/LoadingPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PersonalDetailsPage from './pages/PersonalDetailsPage/PersonalDetailsPage'
import CutoffPage from './pages/CutoffPage/CutoffPage'
import HomePage from './pages/HomePage/HomePage'
import CollegeDetailPage from './pages/CollegeDetailPage/CollegeDetailPage'
import { Suspense } from 'react'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/personal-details',
      element: <PersonalDetailsPage />
    },
    {
      path: '/student-cutoff',
      element: <CutoffPage />
    },
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/college-detail',
      element: <CollegeDetailPage />
    }
  ])

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  )
}

export default App
