import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home';import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Courses from './Components/Courses';
import Pricing from './Components/Pricing';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Contentfour from './Components/Contentfour';
import Contentthree from './Components/Contentthree';
import Contenttwo from './Components/Contenttwo';
import Contentone from './Components/Contentone';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/courses' element={<Courses />} ></Route>
      <Route path='/courses/Contentone' element={<Contentone />} ></Route>
      <Route path='/courses/contenttwo' element={<Contenttwo />} ></Route>
      <Route path='/courses/contentthree' element={<Contentthree />} ></Route>
      <Route path='/courses/contentfour' element={<Contentfour />} ></Route>
      <Route path='/pricing' element={<Pricing />} ></Route>
      <Route path='/contact' element={<ContactUs />} ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
