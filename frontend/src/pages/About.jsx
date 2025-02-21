const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2 className="hero-title">About Me</h2>
        <div className="about-content">
          <p>
            Hello! My name is Abdirashiid Bile Mohamed, and I am a dedicated full-stack developer with a passion for crafting dynamic and engaging web applications. I specialize in creating seamless user experiences through innovative design and robust development practices. With a strong commitment to continuous learning, I actively keep up with the latest trends and technologies in the field, ensuring that my skills remain sharp and relevant. I thrive on challenges and take pride in my ability to solve complex problems effectively. I believe in the power of collaboration and am eager to contribute to projects that make a meaningful impact.
            <br />
            🌍 I am currently based in Mogadishu, Somalia.
          </p>
          <img 
            src="/profile.jpeg" 
            alt="Abdirashiid Bile Mohamed"
            className="profile-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;