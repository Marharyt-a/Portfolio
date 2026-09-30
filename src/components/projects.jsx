import "../css/projects.css"
import portfolioImage from "../assets/projects_portfolio.png";


const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      {/* Верхня шапка */}
      <header className="projects-header">
        <h1>My projects</h1>
      </header>

      {/* Основна частина */}
      <main className="projects-content">
        <h2 className="featured-label">Featured</h2>

        {/* Картка проєкту */}
        <article className="project-card">
          <img
            src={portfolioImage}
            alt="Portfolio preview code background"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-title">Personal Portfolio Website</h3>
            <p className="project-description">A responsive personal portfolio website built with React and JavaScript. 
                It presents my background, capabilities, projects and contact information while demonstrating my frontend 
                development skills.</p>
            
            <p className="project-tags">[ React ] [ JavaScript ] [ HTML ] [ CSS ] [ Vite ]</p>

            <div className="section-features">
            <h3>Features:</h3>
            <ul className="features-list">
                <li>Responsive design</li>
                <li>Component-based architecture</li>
                <li>About Me section</li>
                <li>Capabilities section</li>
                <li>Projects showcase</li>
                <li>Contact section</li>
                <li>Responsive navigation</li>
            </ul>
            </div>
            
            <a
              href="https://github.com/Marharyt-a/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              GitHub
            </a>
          </div>
        </article>
      </main>

    </div>
  );
};

export default Projects