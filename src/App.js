import './App.css';
import NavBar from './components/NavBar';
import Home from './page/home/Home';
import Service from './page/service/Service';
import HowWeWork from './page/howWeWork/HowWeWork';
import Benefits from './page/benefits/Benefits';
import Contact from './page/contact/Contact';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <Service/>
     <HowWeWork/>
     <Benefits/>
     <Contact/>
    </div>
  );
}

export default App;
