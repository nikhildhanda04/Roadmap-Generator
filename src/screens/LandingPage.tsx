import Navbar from "../components/LandingPage/Navbar"
import Hero from "../components/LandingPage/Hero"
import Explore from "../components/LandingPage/Explore"
import Footer from "../components/LandingPage/Footer"
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col landing-bg">
      <Navbar />
      <Hero />
      <Explore />
      <Footer />
    </div>
    </>
  )
}

export default LandingPage
