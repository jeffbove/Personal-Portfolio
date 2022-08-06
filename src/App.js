import Navbar from './Navbar/Navbar';
import Home from './Home';
import About from './About';
import Tools from './Tools';
import Projects from './Projects';
import Contact from './Contact.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Tools />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
