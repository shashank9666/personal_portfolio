import Navbar from './components/UI/Navbar'
import Footer from './components/UI/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'


function App() {
  return (
    <div className=" justify-center items-center flex flex-col">
      <Navbar />
      <main> 
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App

