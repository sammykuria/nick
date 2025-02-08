import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home';import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Courses from './Components/Courses';
import Pricing from './Components/Pricing';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/courses' element={<Courses />} ></Route>
      <Route path='/pricing' element={<Pricing />} ></Route>
      <Route path='/contact' element={<ContactUs />} ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
