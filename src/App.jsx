import './App.css'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''} onClick={() => setIsMobileMenuOpen(false)}>
    <>
      {/* Epic Neural Background */}
      <div className="neural-background" />
      {/* Floating Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
      </div>
      {/* Neural Network Lines */}
      <div className="neural-lines">
        <div className="neural-line" />
        <div className="neural-line" />
        <div className="neural-line" />
      </div>
      {/* Header */}
      <header className="glass">
        <nav>
          <a href="#home" className="logo">
            <svg
              className="logo-icon"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#e0a3ff" }} />
                  <stop offset="50%" style={{ stopColor: "#ff69b4" }} />
                  <stop offset="100%" style={{ stopColor: "#9370db" }} />
                </linearGradient>
              </defs>
              <circle cx={50} cy={30} r={8} fill="url(#logoGradient)" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;1;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={30} cy={60} r={6} fill="url(#logoGradient)" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={70} cy={65} r={7} fill="url(#logoGradient)" opacity="0.7">
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <line
                x1={50}
                y1={30}
                x2={30}
                y2={60}
                stroke="url(#logoGradient)"
                strokeWidth={2}
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1={50}
                y1={30}
                x2={70}
                y2={65}
                stroke="url(#logoGradient)"
                strokeWidth={2}
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1={30}
                y1={60}
                x2={70}
                y2={65}
                stroke="url(#logoGradient)"
                strokeWidth={2}
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </line>
            </svg>
            Portfolio
          </a>
          <ul className="nav-links">
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#features">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
          <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); toggleMobileMenu(); }}>
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>
        </nav>
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <a href="#home" onClick={closeMobileMenu}>About</a>
          <a href="#projects" onClick={closeMobileMenu}>Project</a>
          <a href="#features" onClick={closeMobileMenu}>Skills</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          <button className="dark-mode-toggle" onClick={() => { toggleDarkMode(); closeMobileMenu(); }}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>
      {/* Section 1: Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-subtitle">Welcome to my Portfolio I'm</div>
          <h1>Kirk Percival B. Del Pilar</h1>
          <div className="hero-description">
            <p>
              My interest is coding but it's hard for me so my interest now is finding bugs.
            </p>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">29 Hours</span>
              <span className="hero-stat-label">Availability Per week</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">4</span>
              <span className="hero-stat-label">Ongoing Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">SQA</span>
              <span className="hero-stat-label">Future Work</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">Hybrid</span>
              <span className="hero-stat-label">Work Type</span>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button">
              Contact Me
            </a>
            <a href="#projects" className="cta-button secondary">
              Explore Portfolio
            </a>
          </div>
        </div>
      </section>
      {/* Section 1.5: Projects */}
      <section className="projects" id="projects">
        <h2 className="section-title">MY PROJECTS</h2>
        <div className="projects-container">
          <div className="project-card glass">
            <h3>My Note App</h3>
            <p>My 1st project that I'm confident on coding.</p>
            <a href="https://github.com/kazuo8312004/my-note-app" target="_blank" className="project-link">View on GitHub</a>
          </div>
        </div>
      </section>
      {/* Section 2: Diagonal Features */}
      <section className="features" id="features">
        <div className="features-container">
          <h2 className="section-title">SKILLS</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://www.php.net" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://www.python.org" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40"/>
              </a>
            </div>
            <div className="skill-item">
              <a href="https://laravel.com/" target="_blank" rel="noreferrer">
                <img src="https://www.logo.wine/a/logo/Laravel/Laravel-Logo.wine.svg" alt="Laravel" width="75" height="75"/>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: Hexagonal Showcase */}
      <section className="showcase" id="showcase">
        <h2 className="section-title">RESUME</h2>
        <div className="resume-container">
          <div className="resume-link glass">
            <h4>My Resume</h4>
            <p>Download my detailed resume.</p>
            <a href="/Kirk_Del_Pilar_Resume.pdf" download="Kirk_Del_Pilar_Resume.pdf">Download Resume</a>
          </div>
        </div>
      </section>

      {/* Section 5: Contact */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-info glass">
            <h3>CONTACT ME</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/kirkpercival.delpilar/" target="_blank" className="glass">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="Facebook" height="30" width="40" />
              </a>
              <a href="https://www.instagram.com/kpbdelpilar?igsh=dwdzbmjonnu2bdc2" target="_blank" className="glass">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="40" />
              </a>
              <a href="https://discord.com/channels/@me" target="_blank" className="glass">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="Discord" height="30" width="40" />
              </a>
            </div>
          </div>
          <div className="contact-form glass">
            <div className="form-group">
              <input type="text" placeholder="Neural ID (Name)" required="" />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Quantum Channel (Email)"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Mission Objective (Subject)"
                required=""
              />
            </div>
            <div className="form-group">
              <textarea
                rows={5}
                placeholder="Transmission Data (Message)"
                required=""
                defaultValue={""}
              />
            </div>
            <button type="submit" className="submit-btn">
              TRANSMIT TO MATRIX
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="#features">Skills</a>
            <a href="#showcase">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Documentation</a>
            {/* Add external links */}
            <a href="https://github.com/kazuo8312004" target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
          <div className="footer-copyright">
            <p>
              © 2025 Kirk Percival B. Del Pilar Portfolio. All rights reserved.
            </p>
          </div>
          <div className="footer-design">
            Design:{" "}
            <a
              href="https://templatemo.com"
              target="_blank"
              rel="nofollow noopener"
            >
              TemplateMo
            </a>{" "}
            | Enhanced by Kirk |<a href="#">Portfolio Framework</a>
          </div>
        </div>
      </footer>

    </>
    </div>
  )
}

export default App
