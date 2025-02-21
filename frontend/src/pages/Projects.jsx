const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform built with React.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['flutter', 'firebase']
    },
    {
      title: 'Task Manager',
      description: 'A productivity app for managing daily tasks and projects.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      tags: ['React', 'node js ', 'Mongodb']
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my work.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tags: ['React','Vite' , 'tailwind css' , 'node js' , 'mongodb']
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <h2 className="hero-title">My Projects</h2>
        <p className="hero-subtitle">Here are some of my recent works</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;