import Navbar from './Components/Navbar/Navbar';
//import Counter from './Components/Counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';
import Cards from './Components/Cards/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      {<Navbar/>}
          <Cards/>
      <h2>Developer for Hire</h2>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Works/>
          <Contact/>
        </div>
      </div>
  );
}

export default App;
