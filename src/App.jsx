import Header from './components/Header' 
import Home from './components/Home'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Project from './components/Project'
function App() {
  return (
    <div className = "app-container">
    <Header/>
    <Home/>
    <AboutMe/>
    <Project/>
    <ContactMe/>
    <Footer/>
    </div>
  )
}

export default App
