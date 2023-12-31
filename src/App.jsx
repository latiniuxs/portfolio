import './App.css'
import Header from './components/Header' 
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Project from './components/project'
import ContactMe from './components/ContactMe'
import Footer from './components/footer'
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
