import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
// import MapView from './screens/MapView'
import LoginUser from './screens/Auth/LoginUser'
import SignUp from './screens/Auth/SignUp'
import Layout from './components/Layout'
import RoadmapViewer from './screens/Roadmap/RoadmapViewer'
import React from 'react'

function RequireAuth({ children }: { children: React.ReactNode }) {
  // const isAuthenticated = !!localStorage.getItem('authToken')
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />
  // }
  return children
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <LandingPage />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/mapview"
          element={
            <RequireAuth>
              <MapView />
            </RequireAuth>
          }
        /> */}
        <Route
          path="/login"
          element={
            <Layout>
              <LoginUser />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/roadmap"
          element={
            <RequireAuth>
              <RoadmapViewer />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App