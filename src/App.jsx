import { useEffect, useRef } from "react";
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
      title: "Full-Stack Developer",
      company: "Supportli",
      desc: "Building web and mobile applications for corporate clients and internal tools.",
    },
    {
      period: "2023 — Now",
      title: "Web Developer",
      company: "Forspex",
      desc: "Building web applications.",
    },
    {
      period: "2024 — Now",
      title: "Founder",
      company: "Game Makers Algeria",
      desc: "Growing a community for game developers across Algeria.",
    },
  ],
  education: [
    {
      period: "Completed",
      title: "Master's — Networks and Distributed Systems",
      company: "University of Tlemcen",
      desc: "",
    },
    {
      period: "Completed",
      title: "Bachelor's — Computer Science",
      company: "University of Tlemcen",
      desc: "",
    },
  ],
  skills: {
    Frontend: ["React", "React Native"],
    Backend: ["Node.js", "Express", "Hono.js", "tRPC", "Socket.io"],
    Languages: ["TypeScript", "C/C++", "C#", "Java", "SQL", "Go"],
    Infrastructure: ["Docker", "Linux", "MongoDB", "Netlify", "Vercel", "AWS", "Render"],
    Tools: ["Git", "Github", "Supabase", "Bun", "pnpm"],
  },
  projects: [
    {
      name: "Red Valley RP",
      desc: "Multiplayer roleplay server with custom networking and world systems.",
      tech: ["C#", "Unity", "Networking", "React", "tRPC", "TypeScript"],
      thumbnail: rv,
      link: "https://redm.redvalleyrp.com/",
      live: true,
      github: null,
    },
    {
      name: "Incheck",
      desc: "A task completion tool built to finish what you start, not manage what you don't.",
      tech: ["React", "React Native", "Firebase"],
      thumbnail: incheck,
      link: "https://incheck-landing.netlify.app/",
      live: true,
      github: null,
    },
    {
      name: "Supportli",
      desc: "Customer service platform that puts human connections at its core.",
      tech: ["React"],
      thumbnail: supportli,
      link: "https://www.supportli.net/",
      live: true,
      github: null,
    },
    {
      name: "Qrayti",
      desc: "Platform connecting students with tutors across Algeria.",
      tech: ["React", "Go", "Docker", "PostgreSQL"],
      thumbnail: qrayti,
      link: "https://qrayti.vercel.app/",
      live: true,
      github: null,
    },
    {
      name: "null-form",
      desc: "Smart contact forms for modern websites. Drop in, configure, ship.",
      tech: ["TypeScript", "React"],
      thumbnail: nf,
      link: "https://null-form.vercel.app/",
      live: true,
      github: null,
    },
    {
      name: "Wisal",
      desc: "A modern approach to marriage, connecting people with shared values.",
      tech: ["React", "React Native", "Firebase"],
      thumbnail: wisal,
      link: "https://wisal-web.vercel.app/",
      live: true,
      github: null,
    },
    {
      name: "mobile-dev-cli",
      desc: "CLI tool for wireless ADB pairing and real-time screen mirroring via scrcpy.",
      tech: ["Go", "CLI"],
      thumbnail: mdc,
      link: null,
      live: false,
      github: "https://github.com/yxcinebendjebbar/mobile-dev-cli",
    },
    {
      name: "quad-app",
      desc: "Express template generator — scaffold a production-ready backend in seconds.",
      tech: ["Node.js", "CLI", "React", "npm"],
      thumbnail: quadapp,
      link: "https://www.npmjs.com/package/quad-app",
      live: true,
      github: null,
    },
    {
      name: "Univ-Learn",
      desc: "Academic resource platform for university students.",
      tech: ["React", "Express"],
      thumbnail: univlearn,
      link: null,
      live: false,
      github: null,
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

/* ─── Icons ────────────────────────────────────────────── */

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="16" height="16">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="16" height="16">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="16" height="16">
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

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
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
      <div className="section__content">{children}</div>
    </section>
  );
}

/* ─── App ──────────────────────────────────────────────── */

function App() {
  const heroRef = useReveal();

  return (
    <div className="page">
      {/* Hero */}
      <header className="hero reveal" ref={heroRef}>
        <div className="hero__content">
          <h1 className="hero__name">{data.name}</h1>
          <p className="hero__role">{data.role}</p>
          <div className="hero__about">
            <p>{data.about}</p>
          </div>
          <nav className="hero__links" aria-label="Social links">
            <a href={data.social.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub profile">
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn profile">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a href={data.social.instagram} target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram profile">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Experience */}
      <Section label="Experience">
        <div className="timeline">
          {[...data.experience, ...data.education].map((item, i) => (
            <div className="timeline-item" key={item.title + i}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-body">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-company">{item.company}</span>
                  {item.desc && <p className="timeline-desc">{item.desc}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section label="Projects" stagger>
        <div className="projects-grid">
          {data.projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-thumb-wrapper">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="project-thumb"
                  loading="lazy"
                />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <span
                    className={`status-badge ${project.live ? "status-live" : "status-wip"
                      }`}
                  >
                    {project.live ? "Live" : "In Progress"}
                  </span>
                </div>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="link-action">
                      <LinkIcon />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="link-action">
                      <GitHubIcon />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section label="Stack">
        <div className="stack-grid">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div className="stack-group" key={category}>
              <h3 className="stack-category">{category}</h3>
              <div className="stack-pills">
                {skills.map(skill => (
                  <span className="tech-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section label="Contact" stagger>
        <div className="contact-grid">
          {data.contact.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-info">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
                <ArrowUpRight />
              </a>
            ) : (
              <div key={item.label} className="contact-card contact-card--static">
                <div className="contact-info">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </div>
            )
          )}
        </div>
      </Section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer__text">© {new Date().getFullYear()} Yacine Bendjebbar. Building software.</p>
      </footer>
    </div>
  );
}

export default App;
