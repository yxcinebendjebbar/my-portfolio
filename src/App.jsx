import { useEffect, useRef } from "react";
import myavatar from "./assets/my-avatar.jpg";
import univlearn from "./assets/univ-learn.png";
import supportli from "./assets/supportli.png";
import quadapp from "./assets/quad-app.png";
import qrayti from "./assets/qrayti.png";
import wisal from "./assets/wisal.png";
import nf from "./assets/null-form.png";
import mdc from "./assets/mdc.png";
import incheck from "./assets/incheck.png";
import rv from "./assets/Background2Compressed.png";

/* ─── Data ─────────────────────────────────────────────── */

const data = {
  name: "Yacine Bendjebbar",
  role: "Full-stack developer @ Supportli. Founder of Game Makers Algeria. Based in Tlemcen.",
  avatar: myavatar,
  social: {
    github: "https://github.com/yxcinebendjebbar",
    linkedin: "https://www.linkedin.com/in/yxcinebendjebbar/",
    instagram: "https://www.instagram.com/yacine.jsx/",
  },
  about:
    "I build products from the ground up — backend systems, mobile apps, web platforms for Supportli. I also run a freelancing practice at null and started Game Makers Algeria to give local game developers a place to connect and ship work.",
  experience: [
    {
      period: "2024 — Now",
      title: "Full-Stack Developer, Supportli",
      desc: "Building web and mobile applications for corporate clients and internal tools.",
    },
    {
      period: "2023 — Now",
      title: "Web Developer, Forspex",
      desc: "Building web applications.",
    },
    {
      period: "2024 — Now",
      title: "Founder, Game Makers Algeria",
      desc: "Growing a community for game developers across Algeria.",
    },
  ],
  education: [
    {
      status: "Completed",
      title: "Master's — Networks and Distributed Systems",
      school: "University of Tlemcen",
    },
    {
      status: "Completed",
      title: "Bachelor's — Computer Science",
      school: "University of Tlemcen",
    },
  ],
  skills: [
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Express",
    "Go",
    "C/C++",
    "C#",
    "Java",
    "MongoDB",
    "SQL",
    "Docker",
    "Linux",
    "Git",
  ],
  projects: [
    {
      name: "Red Valley RP",
      desc: "Multiplayer roleplay server with custom networking and world systems.",
      thumbnail: rv,
      link: "https://redvalleyrp.com/",
      live: true,
    },
    {
      name: "Incheck",
      desc: "A task completion tool built to finish what you start, not manage what you don't.",
      thumbnail: incheck,
      link: "https://incheck-landing.netlify.app/",
      live: true,
    },
    {
      name: "Supportli",
      desc: "Customer service platform that puts human connections at its core.",
      thumbnail: supportli,
      link: "https://www.supportli.net/",
      live: true,
    },
    {
      name: "Qrayti",
      desc: "Platform connecting students with tutors across Algeria.",
      thumbnail: qrayti,
      link: "https://www.qrayti.site/",
      live: true,
    },
    {
      name: "null-form",
      desc: "Smart contact forms for modern websites. Drop in, configure, ship.",
      thumbnail: nf,
      link: "https://null-form.vercel.app/",
      live: true,
    },
    {
      name: "Wisal",
      desc: "A modern approach to marriage, connecting people with shared values.",
      thumbnail: wisal,
      link: "https://www.wisal.cc/",
      live: true,
    },
    {
      name: "mobile-dev-cli",
      desc: "CLI tool for wireless ADB pairing and real-time screen mirroring via scrcpy.",
      thumbnail: mdc,
      link: "https://github.com/yxcinebendjebbar/mobile-dev-cli",
      live: true,
    },
    {
      name: "quad-app",
      desc: "Express template generator — scaffold a production-ready backend in seconds.",
      thumbnail: quadapp,
      link: "https://www.npmjs.com/package/quad-app",
      live: true,
    },
    {
      name: "Univ-Learn",
      desc: "Academic resource platform for university students.",
      thumbnail: univlearn,
      link: "",
      live: false,
    },
  ],
  contact: [
    {
      label: "Email",
      value: "yacine.bbusiness@gmail.com",
      href: "mailto:yacine.bbusiness@gmail.com",
    },
    {
      label: "WhatsApp",
      value: "Direct message",
      href: "https://wa.me/+213779527889",
    },
    {
      label: "Telegram",
      value: "@yxcinebendjebbar",
      href: "https://t.me/yxcinebendjebbar",
    },
    {
      label: "Phone",
      value: "+213 779 52 78 89",
      href: null,
    },
  ],
};

/* ─── Icons (inline SVG, no icon library) ──────────────── */

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10L10 4M10 4H5M10 4V9" />
    </svg>
  );
}

/* ─── Scroll reveal hook ───────────────────────────────── */

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Section wrapper ──────────────────────────────────── */

function Section({ label, children, className = "", stagger = false }) {
  const ref = useReveal();
  return (
    <section className={`section ${stagger ? "stagger" : "reveal"} ${className}`} ref={ref}>
      <h2 className="section__label">{label}</h2>
      {children}
    </section>
  );
}

/* ─── App ──────────────────────────────────────────────── */

function App() {
  const heroRef = useReveal();

  return (
    <>
      <div className="ambient" />
      <div className="page">
        {/* Hero */}
        <header className="hero reveal" ref={heroRef}>
          <h1 className="hero__name">{data.name}</h1>
          <p className="hero__role">{data.role}</p>
          <nav className="hero__links" aria-label="Social links">
            <a href={data.social.github} target="_blank" rel="noreferrer" className="hero__link" aria-label="GitHub profile">
              <GitHubIcon />
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="hero__link" aria-label="LinkedIn profile">
              <LinkedInIcon />
            </a>
            <a href={data.social.instagram} target="_blank" rel="noreferrer" className="hero__link" aria-label="Instagram profile">
              <InstagramIcon />
            </a>
          </nav>
        </header>

        {/* About */}
        <Section label="About">
          <div className="about">
            <img src={data.avatar} alt="Yacine Bendjebbar" className="about__avatar" />
            <p className="about__text">{data.about}</p>
          </div>
        </Section>

        {/* Experience */}
        <Section label="Experience" stagger>
          <div className="exp-list">
            {data.experience.map((exp) => (
              <div className="exp-item" key={exp.title}>
                <span className="exp-period">{exp.period}</span>
                <div className="exp-content">
                  <div className="exp-title">{exp.title}</div>
                  <div className="exp-desc">{exp.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section label="Education" stagger>
          <div className="exp-list">
            {data.education.map((edu) => (
              <div className="edu-item" key={edu.title}>
                <span className="edu-status">{edu.status}</span>
                <div>
                  <div className="edu-title">{edu.title}</div>
                  <div className="edu-school">{edu.school}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section label="Technical">
          <div className="skills-grid">
            {data.skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section label="Work">
          <div className="projects-grid">
            {data.projects.map((project) => (
              <a
                key={project.name}
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noreferrer" : undefined}
                className="project-card"
                style={{ textDecoration: "none", cursor: project.link ? "pointer" : "default" }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="project-thumb"
                  loading="lazy"
                />
                <div className="project-body">
                  <div className="project-header">
                    <span className="project-name">{project.name}</span>
                    <span
                      className={`project-status ${project.live ? "project-status--live" : "project-status--wip"
                        }`}
                    >
                      {project.live ? "Live" : "In Progress"}
                    </span>
                  </div>
                  <p className="project-desc">{project.desc}</p>
                  {project.link && (
                    <span className="project-link">
                      View project <ArrowUpRight />
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section label="Contact" stagger>
          <div className="contact-list">
            {data.contact.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                  <span className="contact-arrow">
                    <ArrowUpRight />
                  </span>
                </a>
              ) : (
                <div key={item.label} className="contact-item">
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </Section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer__text">Yacine Bendjebbar — {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
