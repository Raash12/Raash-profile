import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <img
            src="/profile.jpeg"  // Corrected public path
            alt="Raash"
            className="hero-image"
          />
          <h1 className="hero-title">Hello, I'm Raash</h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          
        </div>
      </div>

      {/* Include Other Sections */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;