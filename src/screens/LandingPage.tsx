import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Explore from "../components/Explore"
import Footer from "../components/Footer"
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
