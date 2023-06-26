import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SocialLinks from './components/SocialLinks'
import About from "./components/About"
import Portofolio from './components/Portofolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portofolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
