import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Explore from "../components/Explore"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Explore />
    <Footer />
    </div>
    </>
  )
}

export default LandingPage
