import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // Ensure the path is correct
import Home from './pages/Home'; // Ensure the path is correct
import About from './pages/About'; // Ensure the path is correct
import Projects from './pages/Projects'; // Ensure the path is correct
import Contact from './pages/Contact'; // Ensure the path is correct
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;