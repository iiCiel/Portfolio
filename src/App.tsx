import { ArrowUpRight, Mail } from "lucide-react";

import portrait from "../assets/img/soliman.webp";
import { certs, contact, experience, facts, labs, record, skills } from "./content";
import { featured, projects } from "./projects";
import type { Project, Shot } from "./content";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Masthead />
      <main id="main">
        <TitleBlock />
        <Featured project={featured} />
        <Section id="projects" title="More projects">
          <div className="entries">
            {projects.map((p) => (
              <ProjectEntry key={p.id} project={p} />
            ))}
          </div>
        </Section>
        <Section id="labs" title="Labs and smaller builds">
          <LabsTable />
        </Section>
        <Section id="experience" title="Experience">
          <ol className="log">
            {experience.map((job) => (
              <li key={job.role + job.org} className="log-row">
                <p className="log-when">{job.when}</p>
                <div>
                  <h3 className="log-role">{job.role}</h3>
                  <p className="log-org">
                    {job.org} <span className="muted">· {job.place}</span>
                  </p>
                  <ul className="ticks">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>
        <Section id="record" title="Competitions and leadership">
          <ul className="record">
            {record.map((r) => (
              <li key={r.title}>
                <p className="record-result">{r.result}</p>
                <h3 className="record-title">
                  {r.title} <span className="mono muted">{r.when}</span>
                </h3>
                <p className="record-detail">{r.detail}</p>
              </li>
            ))}
          </ul>
        </Section>
        <Section id="skills" title="Skills and certifications">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skills-row">
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
          <div className="certs">
            <div>
              <h3 className="small-head">Earned</h3>
              <ul className="ticks">
                {certs.done.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="small-head">Working on</h3>
              <ul className="ticks">
                {certs.next.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
        <Contact />
      </main>
      <footer className="footer">
        <p>
          Built by Soliman Alktaifan with React and Vite. Every screenshot is from the real project.
        </p>
        <p className="mono">Updated October 2026 · TLP:CLEAR</p>
      </footer>
    </>
  );
}

function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <a href="#main" className="masthead-id" aria-label="Soliman Alktaifan, top of page">
          <span className="tlp" title="Traffic Light Protocol CLEAR: fine to share publicly">
            TLP:CLEAR
          </span>
          <span className="masthead-name">Soliman Alktaifan</span>
        </a>
        <nav aria-label="Sections">
          <ul className="nav">
            <li>
              <a href="#cyber-office">Work</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li className="nav-optional">
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function TitleBlock() {
  const cover = featured.shots[0];
  return (
    <section className="title-block" aria-labelledby="name">
      <div className="title-copy">
        <h1 id="name" className="display">
          Soliman Alktaifan
        </h1>
        <p className="lede">
          I study cybersecurity at the University of Akron. I work through incidents,{" "}
          <mark className="marker">write them up the way a SOC would</mark>, and build games and tools
          that let other people practice the same work.
        </p>
        <div className="id-card">
          <img
            src={portrait}
            alt="Soliman Alktaifan"
            width={112}
            height={112}
            className="id-photo"
            fetchPriority="high"
          />
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="actions">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" size={18} strokeWidth={2} />
            Email me
          </a>
          <a className="btn" href={contact.github}>
            GitHub
          </a>
          <a className="btn" href={contact.linkedin}>
            LinkedIn
          </a>
        </div>
      </div>
      <figure className="title-figure">
        <a href={featured.links[0].href} className="shot-link" aria-label="Play Cyber Office in your browser">
          <ShotImg shot={cover} eager />
        </a>
        <figcaption>
          <span>
            Now building: <a href="#cyber-office">Cyber Office</a>, a browser game where you work a week as a
            junior security analyst.
          </span>
        </figcaption>
      </figure>
    </section>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="section-head">
        {title}
      </h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Featured({ project }: { project: Project }) {
  const [, terminal, siem] = project.shots;
  return (
    <section id={project.id} className="section featured" aria-labelledby="featured-h">
      <h2 id="featured-h" className="section-head">
        {project.name}
      </h2>
      <div className="section-body">
        <p className="featured-summary">{project.summary}</p>
        <div className="featured-shots">
          {[terminal, siem].map((s) => (
            <figure key={s.src}>
              <ShotImg shot={s} />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="featured-text">
          <div>
            <h3 className="small-head">What I built</h3>
            <ul className="ticks">
              {project.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="small-head">Stack</h3>
            <p className="stack">{project.stack.join(" · ")}</p>
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  const shot = project.shots[0];
  return (
    <article className="entry" aria-labelledby={`${project.id}-h`}>
      <div className="entry-text">
        <h3 id={`${project.id}-h`} className="entry-name">
          {project.name}
        </h3>
        <p className="entry-summary">{project.summary}</p>
        <ul className="ticks">
          {project.built.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="stack">{project.stack.join(" · ")}</p>
        <ProjectLinks project={project} />
      </div>
      <figure className="entry-figure">
        <ShotImg shot={shot} />
        <figcaption>{shot.caption}</figcaption>
      </figure>
    </article>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <p className="links">
      {project.links.map((l) => (
        <a key={l.href} href={l.href} className="link-out">
          {l.label}
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
        </a>
      ))}
      {project.note && <span className="note">{project.note}</span>}
    </p>
  );
}

function ShotImg({ shot, eager = false }: { shot: Shot; eager?: boolean }) {
  return (
    <img
      src={shot.src}
      srcSet={`${shot.srcSm} 720w, ${shot.src} ${shot.w}w`}
      sizes={eager ? "(min-width: 64rem) 52vw, 100vw" : "(min-width: 64rem) 40vw, (min-width: 48rem) 55vw, 100vw"}
      alt={shot.alt}
      width={shot.w}
      height={shot.h}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : undefined}
      className="shot"
    />
  );
}

function LabsTable() {
  return (
    <div className="table-wrap">
      <table className="labs">
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">What it is</th>
            <th scope="col">Tools</th>
          </tr>
        </thead>
        <tbody>
          {labs.map((l) => (
            <tr key={l.name}>
              <th scope="row">
                <span className="lab-name">{l.name}</span>
                <span className="mono muted lab-when">{l.when}</span>
                {l.link && (
                  <a href={l.link.href} className="link-out lab-link">
                    {l.link.label}
                    <ArrowUpRight aria-hidden="true" size={14} strokeWidth={2} />
                  </a>
                )}
              </th>
              <td>{l.what}</td>
              <td className="mono lab-tools">{l.tools}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-h">
      <h2 id="contact-h" className="section-head">
        Contact
      </h2>
      <div className="section-body">
        <p className="contact-lede">
          Hiring for a security internship or co-op in 2027? Email me. If you want my resume, ask and I'll
          send the current PDF.
        </p>
        <p>
          <a className="contact-email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </p>
        <ul className="contact-links">
          <li>
            <a href={contact.linkedin} className="link-out">
              {contact.linkedinLabel}
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
            </a>
          </li>
          <li>
            <a href={contact.github} className="link-out">
              {contact.githubLabel}
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
