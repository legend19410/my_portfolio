import './App.css';

import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
          <Header/>
          <Home/>
          <About/>
          <Service/>
          <Experience/>
          <Portfolio/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
