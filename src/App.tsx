import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import MapView from './screens/MapView'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/mapview" element={<MapView/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
