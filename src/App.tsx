import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import MapView from './screens/MapView'
import LoginUser from './screens/Auth/LoginUser'
import SignUp from './screens/Auth/SignUp'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mapview" element={<MapView />} />
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