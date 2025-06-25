import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import MapView from './screens/MapView'
import LoginUser from './screens/Auth/LoginUser'
import SignUp from './screens/Auth/SignUp'
import Layout from './components/Layout'
import React from 'react'

function RequireAuth({ children }: { children: React.ReactNode }) {
  // Replace this with your real authentication check
  const isAuthenticated = !!localStorage.getItem('authToken')
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
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
        <Route
          path="/mapview"
          element={
            <RequireAuth>
              <MapView />
            </RequireAuth>
          }
        />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App