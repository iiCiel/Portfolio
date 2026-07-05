import { Button } from "@/components/ui/button";
import resumeUrl from "../assets/Soliman_Alktaifan_Resume.pdf";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  "4.0 GPA",
  "7th / 68 Capture Ohio CTF",
  "5th Midwest Regional CCDC",
  "45+ TryHackMe rooms",
];

const projects = [
  {
    label: "SOC Simulator",
    title: "TryHackMe SOC Simulator",
    meta: "Phishing triage, SIEM analysis, incident reporting",
    copy: "Triaged simulated SOC alert queues, separated true and false positive phishing cases, queried Splunk dashboards, and wrote structured case reports with IOCs and remediation notes.",
  },
  {
    label: "Campus Product",
    title: "COB Zippy AI Information Kiosk",
    meta: "Python, QML, local LLM retrieval",
    copy: "Contributed to an on premise information assistant for 2,000+ College of Business students, implementing search and retrieval features across campus documents and support resources.",
  },
  {
    label: "Training Platform",
    title: "HackLab Coach",
    meta: "Next.js, TypeScript, React, Groq API",
    copy: "Built a cybersecurity training platform with streamed coaching, adaptive challenges, rubric based grading, MITRE ATT&CK mapping, and a skill analytics dashboard.",
  },
  {
    label: "Mobile App",
    title: "Daily Mood App",
    meta: "React Native, Expo, SQLite",
    copy: "Built a local first productivity app with mood tracking, habits, pomodoro sessions, tasks, notifications, biometric lock, custom theming, and EAS Android builds.",
  },
];

const experience = [
  {
    role: "Software Development Student Assistant",
    place: "University of Akron, College of Business Computer Labs",
    date: "Aug 2025 - Present",
    points: [
      "Resolve 45+ technical support tickets across 3 computer labs within 24 hour SLA.",
      "Manage endpoint devices using Microsoft Intune, compliance checks, and deployment support.",
      "Standardized team GitHub workflow with PR templates, branch protection, and commit conventions.",
    ],
  },
  {
    role: "Resident Assistant",
    place: "University of Akron Campus Housing",
    date: "Aug 2025 - Present",
    points: [
      "Primary safety and conduct contact for 40+ residents.",
      "Draft incident reports and coordinate with professional staff on security concerns.",
      "Plan educational programming on personal safety, digital hygiene, and community standards.",
    ],
  },
  {
    role: "IT Technician",
    place: "Construction and Development LTD",
    date: "Jun 2022 - Aug 2023",
    points: [
      "Managed IT support for a 15 person office, including workstations, backups, and helpdesk requests.",
      "Executed a server migration during office relocation with zero data loss and under 24 hours downtime.",
      "Supported SAMA audit preparation by organizing and reviewing sensitive financial documents.",
    ],
  },
];

const skillGroups = [
  {
    title: "Security",
    items: ["Wireshark", "Splunk", "Nmap", "Nessus", "Burp Suite", "Snort", "CyberChef"],
  },
  {
    title: "Infrastructure",
    items: ["Linux", "AWS", "Docker basics", "Active Directory", "Microsoft Intune", "Cisco IOS"],
  },
  {
    title: "Development",
    items: ["Python", "TypeScript", "React", "Next.js", "React Native", "SQL", "Bash"],
  },
  {
    title: "Frameworks",
    items: ["MITRE ATT&CK", "NIST 800-53", "ISO 27001", "SOC 2", "GDPR", "HIPAA"],
  },
];

const leadership = [
  "Founding President, HTCIA Student Chapter",
  "OCRI Capture Ohio 2026 CTF participant badge",
  "Google Cybersecurity Professional Certificate",
  "Cisco Networking Essentials and IT Essentials",
];

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
          <a
            href="#top"
            className="text-3xl tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            aria-label="Soliman Alktaifan home"
          >
            Soliman
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="liquid-glass rounded-full px-5 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] sm:px-6"
            href={resumeUrl}
            download
          >
            Resume
          </a>
        </nav>

        <div
          id="top"
          className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-24 text-center sm:pb-32"
        >
          <p className="animate-fade-rise liquid-glass mb-8 rounded-full px-5 py-2 text-sm text-muted-foreground">
            Cybersecurity student at the University of Akron
          </p>

          <h1
            className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Turning noisy systems into{" "}
            <em className="not-italic text-muted-foreground">clear evidence.</em>
          </h1>

          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I investigate alerts, analyze packets, build detection labs, and ship tools
            that make cybersecurity work easier to understand and act on.
          </p>

          <div className="animate-fade-rise-delay-2 mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              className="liquid-glass rounded-full px-10 py-4 text-base text-foreground transition-transform hover:scale-[1.03] sm:px-14"
              href="#work"
            >
              View Work
            </a>
            <Button
              variant="glass"
              className="liquid-glass h-auto rounded-full px-10 py-4 text-base text-foreground transition-transform hover:scale-[1.03] sm:px-14"
              onClick={() => {
                window.location.href = "mailto:solimansultan59@gmail.com";
              }}
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-3 text-left md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat} className="liquid-glass rounded-2xl px-4 py-4">
                <p className="text-sm leading-snug text-foreground">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects built from labs, campus needs, and real analyst practice."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="liquid-glass rounded-3xl p-6 sm:p-8">
              <p className="text-sm text-muted-foreground">{project.label}</p>
              <h3
                className="mt-10 text-4xl font-normal leading-none text-foreground sm:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {project.title}
              </h3>
              <p className="mt-4 text-sm font-medium text-foreground">{project.meta}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {project.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Technical support, campus leadership, and security focused work."
        />
        <div className="grid gap-4">
          {experience.map((item) => (
            <article
              key={item.role}
              className="grid gap-6 border-t border-border py-8 md:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <p className="text-sm text-muted-foreground">{item.date}</p>
                <h3
                  className="mt-3 text-3xl font-normal text-foreground sm:text-4xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.place}</p>
              </div>
              <ul className="grid gap-3 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <SectionHeader
          eyebrow="Toolkit"
          title="Security, infrastructure, and development tools I use."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="liquid-glass rounded-3xl p-6">
              <h3
                className="text-3xl font-normal text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {group.title}
              </h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <SectionHeader
          eyebrow="Leadership and training"
          title="Competition, certification, and community work."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {leadership.map((item) => (
            <div key={item} className="border-t border-border py-5 text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <div className="liquid-glass rounded-[2rem] p-8 text-center sm:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h2
            className="mx-auto mt-5 max-w-4xl text-5xl font-normal leading-none text-foreground sm:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Available for cybersecurity, IT, and software internships.
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              href="mailto:solimansultan59@gmail.com"
            >
              Email Soliman
            </a>
            <a
              className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
              href="https://www.linkedin.com/in/soliman-alktaifan"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
              href="https://github.com/iiCiel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[0.35fr_1fr]">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2
        className="max-w-4xl text-5xl font-normal leading-none text-foreground sm:text-7xl"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h2>
    </div>
  );
}
