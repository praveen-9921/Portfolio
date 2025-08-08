import { useState } from 'react'
import logo from '/logo.png'
import vision from '/visionchat.png'
import problem from '/problem.jpg'
import training from '/training.jpg'
import quiz from '/quiz.jpg'
import praveen from '/praveen.jpg'
import webdevelopment from '/webdevelopment.jpg'
import notes from '/notesapp.png'
import scramble from '/scramble.png'
import weather from '/weather.png'
import portfolio from '/portfolio.png'
import Box from './components/Box/Box'
import './App.css'
import './Css/Navbar.css'
import './Css/Home.css'
import './Css/About.css'
import './Css/Skills.css'
import './Css/Education.css'
import './Css/Projects.css'
import './Css/Contact.css'
import './Css/Footer.css'

const skillsData = [
  {
    category: 'Frontend Frameworks',
    items: ['React'],
  },
  {
    category: 'Languages',
    items: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Vite', 'Node.js', 'REST APIs'],
  },
];

// Education and Certifications Data
const educationData = [
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Maharishi Dayanand University',
    years: '2022 - 2025',
    desc: 'Specialized in Software Engineering and Web Development.',
    achievements: [
      "Win some of the coding competition"
    ],
    icon: '🎓',
  },
  {
    degree: 'Higher Education 10th to 12th Grade',
    institution: 'Central board of Secondary Education',
    years: '2019-2022',
    desc: 'I did my grade in the Humanities backgroud',
    achievements: [
      'Got 1st place in grade 12th',
    ],
    icon: '💻',
  }
];

const certificationsData = [
  {
    title: 'Web Development Certification',
    org: 'Coding Blocks',
    year: '2023',
    file: webdevelopment, // Placeholder
  },
  {
    title: 'Certificate of problem solving',
    org: 'SAITM',
    year: '2024',
    file: problem,
  },
  {
    title: 'Web Development Training',
    org: 'SAITM',
    year: '2025',
    file: training,
  },
  {
    title: 'Certificate of Tech Quiz',
    org: 'SAITM',
    year: '2025',
    file: quiz,
  },
];

// Projects Data
const featuredProjects = [
  {
    id: 1,
    title: "Vison Chat Web App",
    description: "A real-time chat application built with [Node.js/Socket.IO—adjust as needed]. Features include public and private chat rooms, live message updates using WebSockets, user presence tracking, file sharing, and temporary message storage with automatic deletion after a set time.",
    technologies: ["HTML5", "CSS3", "JS", "Node.js"],
    image: vision,
    liveDemo: "https://visionchat2025.netlify.app/",
    sourceCode: "/private"
  },
  {
    id: 2,
    title: "Note App",
    description: "A clean and efficient note-taking application built with React and Node.js. Features include secure user authentication, ability to create, undo, redo, and delete notes, with real-time database synchronization ensuring permanent updates and seamless user experience across sessions.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    image: notes,
    liveDemo: "https://notesapp2025.netlify.app/",
    sourceCode: "https://github.com/praveen-9921/NoteApp"
  }
];

const otherProjects = [
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with clean design and optimized performance.",
    technologies: ["React", "vite", "CSS Modules"],
    image: portfolio,
    liveDemo: "https://praveenmandal.netlify.app",
    sourceCode: "https://github.com/praveen-9921/Portfolio"
  },
  {
    id: 4,
    title: "Scramble Game",
    description: "A fun word scramble game with limited chances, responsive design, hint and answer buttons for interactive user experience.",
    technologies: ["HTML5", "CSS3", "JS"],
    image: scramble,
    liveDemo: "https://scramblegame2025.netlify.app/",
    sourceCode: "https://github.com/praveen-9921/scramble-game"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A sleek and responsive weather app displaying real-time weather data with location search, temperature, humidity, and condition icons.",
    technologies: ["React", "API"],
    image: weather,
    liveDemo: "https://weatherforecast2025.netlify.app/",
    sourceCode: "https://github.com/praveen-9921/weatherApp"
  }
];

// Contact Data
const contactData = [
  {
    id: 1,
    icon: "mail-outline",
    label: "Email",
    value: "pk9994437@gmail.com",
    link: "mailto:pk9994437@gmail.com"
  },
  {
    id: 2,
    icon: "logo-linkedin",
    label: "LinkedIn",
    value: "/in/praveen-kumar",
    link: "https://www.linkedin.com/in/praveen-kumar-72b242255/"
  },
  {
    id: 3,
    icon: "logo-github",
    label: "GitHub",
    value: "/praveen-9921",
    link: "https://github.com/praveen-9921"
  },
  {
    id: 4,
    icon: "globe-outline",
    label: "Portfolio",
    value: "www.praveenkumar.dev",
    link: "https://praveenkumar.dev"
  }
];


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <>
      {/* Navbar */}
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Hamburger Menu Button */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <ion-icon name="close-outline" size="large"></ion-icon>
          ) : (
            <ion-icon name="menu-outline" size="large"></ion-icon>
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="navigation desktop-nav">
          <li><a href="#/" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="contact desktop-contact">
          <a href="#contact" onClick={closeMenu}>Get In Touch <ion-icon name="arrow-forward"></ion-icon></a>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navigation mobile-nav">
            <li><a href="#/" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className="contact mobile-contact">
            <a href="#contact" onClick={closeMenu}>Get In Touch <ion-icon name="arrow-forward"></ion-icon></a>
          </div>
        </div>
      </div>


      {/* Home */}
      <div className="home-container" id='/'>
        <div className="home-content">
          <h1 className="home-name">Praveen Kumar</h1>
          <h2 className="home-title">Frontend Developer</h2>
          <p className="home-description">
            I build modern, performant web applications with React and cutting-edge frontend technologies.
            Passionate about clean code, user experience, and use AI to do task fast.
          </p>
          <div className="home-buttons">
            <button className="btn-primary"><a href="#projects">View Projects</a></button>
            <button className="btn-secondary"><a href="mailto:pk9994437@gmail.com">Contact Me</a></button>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="about-container" id='about'>
        <div className="about-content" >
          <div className="about-left">
            <h2 className="about-title">About Me</h2>
            <div className="about-text">
              <p>
                I'm Praveen, an enthusiastic React developer eager to kickstart my career in building modern, responsive web applications. I have a strong foundation in JavaScript, React, and frontend development principles, with a passion for creating user-friendly interfaces.
              </p>
              <p>
                I enjoy exploring new frontend technologies, learning best practices, and improving my problem-solving skills through personal projects and coding challenges. I'm driven to grow my expertise and contribute fresh ideas to innovative web solutions.
              </p>
              <p>
                Excited to collaborate and bring creative concepts to life through code.
              </p>
            </div>
            <div className="about-tags">
              <div className="tag">
                <span className="tag-icon">&lt;/&gt;</span>
                <span className="tag-text">React Development</span>
              </div>
              <div className="tag">
                <span className="tag-icon">♡</span>
                <span className="tag-text">Open Source</span>
              </div>
              <div className="tag">
                <span className="tag-icon">◰</span>
                <span className="tag-text">Continuous Learning</span>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="image-placeholder">
              <img src={praveen} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <section className="skills-section" id='skills'>
        <h2 className="skills-title">Skills & Technologies</h2>
        <p className="skills-subtitle">
          Tools and frameworks I use to build exceptional web experiences.
        </p>
        <div className="skills-categories">
          {skillsData.map((cat) => (
            <div key={cat.category} className="skills-category">
              <h3 className="category-title">{cat.category}</h3>
              <div className="skills-list">
                {cat.items.map((item) => (
                  <Box key={item} className="skill-box">
                    <span className="skill-name">{item}</span>
                    {/* You can add icons or progress bars here */}
                  </Box>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Education & Certifications section */}
      <section className="education-section" id="education">
        <h2 className="education-title">Education & Certifications</h2>
        <div className="education-certifications-container">
          {/* Education Timeline */}
          <div className="education-column">
            <h3 className="column-title"><span role="img" aria-label="Education">🎓</span> Education</h3>
            <div className="education-timeline">
              {educationData.map((edu, idx) => (
                <div className="education-timeline-item" key={edu.degree + edu.institution}>
                  <div className="timeline-icon">{edu.icon}</div>
                  <div className="education-card">
                    <h4 className="degree-title">{edu.degree} <span className="date-range">📅 {edu.years}</span></h4>
                    <div className="institution">{edu.institution}</div>
                    <div className="education-desc">{edu.desc}</div>
                    <div className="key-achievements">
                      <strong>Key Achievements:</strong>
                      <ul>
                        {edu.achievements.map((ach, i) => (
                          <li key={i}>✓ {ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Certifications Grid */}
          <div className="certifications-column">
            <h3 className="column-title"><span role="img" aria-label="Certifications">🧑‍🎓</span> Certifications</h3>
            <div className="certifications-grid">
              {certificationsData.map((cert, idx) => (
                <div className="certification-card" key={cert.title + cert.org}>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-org">{cert.org}</div>
                  <div className="cert-year">{cert.year}</div>
                  <a className="download-btn" href={cert.file} download>Download Certificate</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="projects-section" id="projects">
        <h2 className="projects-title">Projects</h2>

        {/* Featured Projects */}
        <div className="featured-projects">
          <h3 className="section-subtitle">Featured Projects</h3>
          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <div className="featured-project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <a href={project.liveDemo} target='_blank' className="btn-demo">🌐 Live Demo</a>
                    <a href={project.sourceCode} target='_blank' className="btn-source"><ion-icon name="logo-github"></ion-icon>Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Notable Projects */}
        <div className="other-projects">
          <h3 className="section-subtitle">Other Notable Projects</h3>
          <div className="other-projects-grid">
            {otherProjects.map((project) => (
              <div className="other-project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveDemo} target='_blank' className="link-icon">🌐</a>
                    <a href={project.sourceCode} target='_blank' className="link-icon"><ion-icon name="logo-github"></ion-icon></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <div className="contact-cards">
            {contactData.map((contact) => (
              <a href={contact.link} key={contact.id} className="contact-card" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">
                  <ion-icon name={contact.icon}></ion-icon>
                </div>
                <div className="contact-info">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="resume-download">
            <a href="/resume.pdf" className="btn-resume" download>
              <ion-icon name="download-outline"></ion-icon>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-name">Praveen Kumar</div>
            <nav className="footer-nav">
              <a href="#/">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Praveen Kumar. All rights reserved.
            </div>
            <div className="footer-socials">
              <a href="https://github.com/praveen-9921" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github"></ion-icon></a>
              <a href="https://www.linkedin.com/in/praveen-kumar-72b242255/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="https://x.com/pk9994437" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-twitter"></ion-icon></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
