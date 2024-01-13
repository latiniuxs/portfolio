import './App.css'
import Header from './components/Header' 
import Home from './components/Home'
import Footer from './components/footer'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Project from './components/project'
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
