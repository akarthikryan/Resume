import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Resume = () => {
  const [personalInfo] = useState({
    name: "Karthikeyan A",
    title: "Fullstack Developer",
    email: "karthikeyanprof2001@gmail.com",
    phone: "936033146",
    location: "Chennai",
    linkedin: "https://www.linkedin.com/in/karthikeyan-a-281310296",
    github: "https://github.com/akarthikryan",
  });

  const [education] = useState([
    {
      id: 1,
      degree: "Bachelor of Computer Application",
      institution: "Sri Ramakrishna College of Arts and Science",
      location: "Coimbatore",
      period: "2019–2022",
      description:
        "Graduated with honors. Specialized in Web Technologies and Software Engineering.",
    },
    {
      id: 2,
      degree: "Master of Computer Application",
      institution: "Kumaraguru College of Technology",
      location: "Coimbatore",
      period: "2023–2025",
      description:
        "Currently pursuing. Specialized in Web Technologies and Software Engineering.",
    },
  ]);

  const [skills] = useState({
    technical: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Django",
      "Tkinter",
      "React",
      "HTML5",
      "CSS3/SCSS",
      "Node.js",
      "Git",
      "REST APIs",
      "GraphQL",
      "Responsive Design",
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Management",
      "Agile Methodologies",
    ],
  });

  const [projects] = useState([
    {
      id: 1,
      name: "Quote Generator",
      description: "A random quote generator using React and public APIs.",
      technologies: ["React", "CSS", "REST API"],
    },
    {
      id: 2,
      name: "User Management System",
      description: "A CRUD application to manage users, including login and role-based access.",
      technologies: ["Python","Tkinter" ,"SQLite"],
    },
    {
      id: 3,
      name: "Bike Gear Sales",
      description: "An e-commerce website for selling bike accessories and gear.",
      technologies: ["React", "Bootstrap", "Node.js","Express", "MongoDB"],
    },
    {
      id: 4,
      name: "Spotify Clone",
      description: "A Spotify-inspired music player UI with playlist and audio streaming support.",
      technologies: ["React", "Tailwind CSS", "Spotify API"],
    },
  ]);

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container bg-white p-4 rounded shadow">
        {/* Header */}
        <header className="mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <h1 className="h2">{personalInfo.name}</h1>
              <h2 className="h5 text-muted">{personalInfo.title}</h2>
            </div>
            <button className="btn btn-outline-primary mt-2 mt-md-0">
              Download PDF
            </button>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p>
                <Mail size={16} className="me-2" />
                {personalInfo.email}
              </p>
              <p>
                <Phone size={16} className="me-2" />
                {personalInfo.phone}
              </p>
              <p>
                <Linkedin size={16} className="me-2" />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <Github size={16} className="me-2" />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profile
                </a>
              </p>
              <p>
                <MapPin size={16} className="me-2" />
                {personalInfo.location}
              </p>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-4">
          <h3 className="h5 border-bottom pb-2">Professional Summary</h3>
          <p>
            Passionate and results-driven Fullstack Developer with experience building responsive,
            user-friendly web applications. Specialized in the React ecosystem with a strong focus
            on creating efficient, scalable, and maintainable code. Committed to staying current
            with emerging technologies and industry best practices.
          </p>
        </section>

        {/* Education */}
        <section className="mb-4">
          <h3 className="h5 border-bottom pb-2">Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="d-flex justify-content-between">
                <strong>{edu.degree}</strong>
                <span className="text-muted">{edu.period}</span>
              </div>
              <div className="text-primary">{edu.institution}</div>
              <div className="text-muted">{edu.location}</div>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h3 className="h5 border-bottom pb-2">Projects</h3>
          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <strong>{project.name}</strong>
              <p className="mb-1">{project.description}</p>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="badge bg-info text-dark">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section>
          <h3 className="h5 border-bottom pb-2">Skills</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <h6>Technical Skills</h6>
              <div className="d-flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="badge bg-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <h6>Soft Skills</h6>
              <div className="d-flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="badge bg-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
