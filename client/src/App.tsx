import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import PersonalDetailsPage from './pages/PersonalDetailsPage/PersonalDetailsPage'
import CutoffPage from './pages/CutoffPage/CutoffPage'
import HomePage from './pages/HomePage/HomePage'
import CollegeDetailPage from './pages/CollegeDetailPage/CollegeDetailPage'
import { Suspense, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'
import LoadingPage from './pages/LoadingPage/LoadingPage'

function App() {
  const [hideSidebar, setHideSidebar] = useState(true);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setHideSidebar(false);
    } else {
      setHideSidebar(true);
    }
  }, [user]);

  const routes = [
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
  ]

  if(loading)
    return <LoadingPage />

  return (
    <>
      <div className={`outer-container ${!hideSidebar ? 'grid grid-cols-[300px_1fr]' : 'grid grid-cols-[1fr]'}`}>
        {!hideSidebar && <div className="side-bar-container">
          <Sidebar />
        </div>}
        <div className="main-content-container">
          {/* <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={routes} />
          </Suspense> */}
          <Routes>
            {
              routes.map(route => <Route element={route.element} path={route.path} />)
            }
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
