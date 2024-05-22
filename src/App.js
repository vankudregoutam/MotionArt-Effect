import './App.css';
import Cursor from './components/Cursor';
import Features from './components/Features';
// import FlameCursor from './components/FlameCursor';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Rating from './components/Rating';
import Section from './components/Section';
import SupportedBrowsers from './components/SupportedBrowsers';
import Visitors from './components/Visitors';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Cursor />
        {/* <FlameCursor /> */}
        <NavBar />
        <Intro />
        <Rating />
        <Visitors />
        <Section />
        <SupportedBrowsers />
        <Features />
        <Footer />
      </Router>
    </>
  );
}

export default App;
