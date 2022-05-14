import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App(){
  return(
    <div className='App'>
      <NavBar />
      <div className='container'>
        <LandingPage />
        <About />
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;