
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/skill" element={<Skills/>}/>     
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="*" element={<Home/>}/> */}
      {/* <Route path="/footer" element={<Footer/>}/> */}
    </Routes>

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
