import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  FileSearch,
  GraduationCap,
  Mail,
  Network,
  Radar,
  ShieldCheck,
  Terminal,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import portraitUrl from "../assets/soliman.jpg";
import resumeUrl from "../assets/Soliman_Alktaifan_Resume.pdf";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const backdropImageUrl =
  "https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png";

const navItems = [
  { label: "Cases", href: "#work" },
  { label: "Field Work", href: "#experience" },
  { label: "Toolkit", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { label: "GPA", value: "4.0" },
  { label: "Capture Ohio CTF", value: "7 / 68" },
  { label: "Midwest CCDC", value: "5th" },
  { label: "TryHackMe rooms", value: "45+" },
];

const projects = [
  {
    icon: Radar,
    label: "SOC-01",
    title: "TryHackMe SOC Simulator",
    meta: "Phishing triage, SIEM analysis, incident reporting",
    copy: "Triaged alert queues, separated true and false positive phishing cases, queried Splunk dashboards, and wrote case reports with IOCs and remediation notes.",
    stack: ["Splunk", "MITRE ATT&CK", "Phishing", "Reports"],
  },
  {
    icon: FileSearch,
    label: "COB-02",
    title: "Zippy AI Information Kiosk",
    meta: "Python, QML, campus document retrieval",
    copy: "Contributed to an on premise assistant for 2,000+ College of Business students, improving search and retrieval across policies, forms, schedules, and support resources.",
    stack: ["Python", "QML", "Ollama", "Docs"],
    href: "https://github.com/dylondark/cob-zippy-ai",
  },
  {
    icon: ShieldCheck,
    label: "LAB-03",
    title: "SOC Detection and Response Lab",
    meta: "Splunk, Sysmon, Windows and Linux telemetry",
    copy: "Building a hands on lab for failed logins, suspicious PowerShell, scheduled task persistence, privileged account changes, dashboards, and analyst notes.",
    stack: ["Splunk", "Sysmon", "SPL", "Python"],
  },
  {
    icon: Terminal,
    label: "APP-04",
    title: "HackLab Coach",
    meta: "Next.js, TypeScript, React, Groq API",
    copy: "Built a cybersecurity training platform with streamed coaching, adaptive challenges, rubric based grading, MITRE mapping, and skill analytics.",
    stack: ["Next.js", "React", "Groq", "Recharts"],
    href: "https://github.com/iiCiel/hacklab-coach",
  },
  {
    icon: Activity,
    label: "MOB-05",
    title: "Daily Mood App",
    meta: "React Native, Expo, SQLite",
    copy: "Built a local first productivity app with mood tracking, habits, pomodoro sessions, tasks, notifications, biometric lock, custom themes, and Android builds.",
    stack: ["Expo", "SQLite", "Notifications", "EAS"],
    href: "https://github.com/iiCiel/Daily-Mood-App",
  },
  {
    icon: Network,
    label: "NET-06",
    title: "Cisco Network Labs",
    meta: "Packet Tracer, VLANs, OSPF, DHCP",
    copy: "Configured routed and switched topologies covering inter VLAN routing, OSPF, DHCPv4 and DHCPv6, STP, EtherChannel, ACLs, and wildcard masks.",
    stack: ["Cisco IOS", "OSPF", "VLANs", "ACLs"],
  },
];

const experience = [
  {
    role: "Software Development Student Assistant",
    place: "University of Akron, College of Business Computer Labs",
    date: "Aug 2025 - Present",
    icon: BriefcaseBusiness,
    points: [
      "Resolve 45+ support tickets across 3 labs within 24 hour SLA.",
      "Manage endpoint compliance, health checks, and deployment workflows in Microsoft Intune.",
      "Standardized GitHub workflow with PR templates, branch protection, and commit conventions.",
    ],
  },
  {
    role: "Resident Assistant",
    place: "University of Akron Campus Housing",
    date: "Aug 2025 - Present",
    icon: ShieldCheck,
    points: [
      "Primary safety and conduct contact for 40+ residents.",
      "Draft incident reports and coordinate with professional staff on safety concerns.",
      "Run programming on personal safety, digital hygiene, and community standards.",
    ],
  },
  {
    role: "IT Technician",
    place: "Construction and Development LTD",
    date: "Jun 2022 - Aug 2023",
    icon: Terminal,
    points: [
      "Managed support for a 15 person office, including provisioning, backups, and helpdesk requests.",
      "Completed a server migration with zero data loss and under 24 hours downtime.",
      "Supported SAMA audit preparation by organizing sensitive financial documents.",
    ],
  },
];

const skillGroups = [
  {
    title: "Security Operations",
    icon: ShieldCheck,
    items: ["Splunk", "Wireshark", "Nmap", "Nessus", "Burp Suite", "Snort", "CyberChef"],
  },
  {
    title: "Networks and Systems",
    icon: Network,
    items: ["Cisco IOS", "Linux", "AWS", "Docker basics", "Active Directory", "Microsoft Intune"],
  },
  {
    title: "Software",
    icon: Code2,
    items: ["Python", "TypeScript", "React", "Next.js", "React Native", "SQL", "Bash"],
  },
  {
    title: "Governance",
    icon: GraduationCap,
    items: ["MITRE ATT&CK", "NIST 800-53", "ISO 27001", "SOC 2", "GDPR", "HIPAA"],
  },
];

const credentials = [
  "Founding President, HTCIA Student Chapter",
  "OCRI Capture Ohio 2026 participation badge",
  "Google Cybersecurity Professional Certificate",
  "Cisco Networking Essentials",
  "Cisco IT Essentials",
  "Jira Service Management Fundamentals",
];

export default function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [videoActive, setVideoActive] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;

    if (!video || !hero || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoActive(true);
          video.play().catch(() => {});
        } else {
          video.pause();
          setVideoActive(false);
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <SiteBackdrop videoRef={videoRef} videoActive={videoActive} />
      <Navigation />

      <section ref={heroRef} id="top" className="relative z-10 min-h-screen overflow-hidden">
        <div className="mx-auto grid min-h-screen max-w-7xl items-end gap-10 px-5 pb-8 pt-28 sm:px-8 lg:grid-cols-[1fr_22rem] lg:pb-12">
          <div className="max-w-6xl">
            <p className="animate-fade-rise liquid-glass mb-8 inline-flex rounded-full px-5 py-2 text-sm text-muted-foreground">
              Cybersecurity B.S. / University of Akron / Class of 2027
            </p>
            <h1
              className="animate-fade-rise max-w-6xl text-5xl font-normal leading-[0.92] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              I turn noisy systems into{" "}
              <em className="not-italic text-muted-foreground">clear evidence.</em>
            </h1>
            <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              SOC practice, packet analysis, endpoint support, campus software, and
              competition work shaped into one focused cybersecurity portfolio.
            </p>

            <div className="animate-fade-rise-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
              <IconLink href="#work" icon={FileSearch}>
                Review Case Files
              </IconLink>
              <IconLink href="mailto:solimansultan59@gmail.com" icon={Mail}>
                Start a Conversation
              </IconLink>
            </div>
          </div>

          <aside className="animate-fade-rise-delay-2 liquid-glass hero-dossier rounded-[2rem] p-4">
            <div className="relative overflow-hidden rounded-[1.4rem]">
              <img
                src={portraitUrl}
                alt="Portrait of Soliman Alktaifan"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm text-muted-foreground">Analyst profile</p>
                <p className="text-xl text-foreground">Soliman Alktaifan</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/70 p-3">
                  <p
                    className="text-3xl leading-none text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="relative z-10 border-y border-border/70 bg-black/25 py-3">
          <div className="marquee-track text-sm uppercase tracking-[0.28em] text-muted-foreground">
            <span>Wireshark</span>
            <span>Splunk</span>
            <span>Network Forensics</span>
            <span>Incident Reports</span>
            <span>Linux</span>
            <span>Active Directory</span>
            <span>MITRE ATT&CK</span>
            <span>Python</span>
            <span>Wireshark</span>
            <span>Splunk</span>
            <span>Network Forensics</span>
            <span>Incident Reports</span>
          </div>
        </div>
      </section>

      <section id="work" className="site-section">
        <SectionHeader
          eyebrow="Selected case files"
          title="Not portfolio filler. Work with evidence, tooling, and users behind it."
        />
        <div className="case-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className={`case-file glass-panel rounded-[2rem] p-5 sm:p-6 ${
                  index === 0 || index === 2 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {project.label}
                  </span>
                  <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
                </div>
                <div className="mt-12">
                  <p className="text-sm text-muted-foreground">{project.meta}</p>
                  <h3
                    className="mt-3 text-4xl font-normal leading-none text-foreground sm:text-5xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                    {project.copy}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-sm text-foreground"
                    >
                      Open <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="site-section">
        <SectionHeader
          eyebrow="Field work"
          title="Support, housing leadership, and infrastructure work under real constraints."
        />
        <div className="timeline">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.role} className="timeline-item">
                <div className="timeline-icon">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="glass-panel rounded-[1.75rem] p-5 sm:p-7">
                  <div className="grid gap-4 md:grid-cols-[0.7fr_1fr]">
                    <div>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <h3
                        className="mt-3 text-3xl font-normal leading-none text-foreground sm:text-5xl"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {item.role}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground">{item.place}</p>
                    </div>
                    <ul className="grid gap-3 text-muted-foreground">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="site-section">
        <SectionHeader
          eyebrow="Toolkit"
          title="A practical stack for SOC work, labs, support, and software builds."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="glass-panel skill-panel rounded-[2rem] p-6">
                <div className="flex items-center justify-between">
                  <h3
                    className="text-4xl font-normal text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {group.title}
                  </h3>
                  <Icon className="h-6 w-6 text-foreground" aria-hidden="true" />
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-section">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Signal"
              title="Competition, certification, and chapter work."
            />
          </div>
          <div className="signal-wall">
            {credentials.map((item, index) => (
              <div key={item} className="signal-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="site-section pb-10">
        <div className="liquid-glass contact-panel rounded-[2.5rem] p-7 text-center sm:p-12">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Contact</p>
          <h2
            className="mx-auto mt-5 max-w-5xl text-5xl font-normal leading-none text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Available for cybersecurity, IT, and software internships.
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <IconLink href="mailto:solimansultan59@gmail.com" icon={Mail}>
              Email
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/soliman-alktaifan"
              icon={BriefcaseBusiness}
              external
            >
              LinkedIn
            </IconLink>
            <IconLink href="https://github.com/iiCiel" icon={Code2} external>
              GitHub
            </IconLink>
          </div>
        </div>
      </section>
    </main>
  );
}

function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <div className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <a
          href="#top"
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          aria-label="Soliman Alktaifan home"
        >
          Soliman
        </a>

        <div className="hidden items-center gap-7 md:flex">
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
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:px-5"
          href={resumeUrl}
          download
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Resume
        </a>
      </div>
    </nav>
  );
}

function SiteBackdrop({
  videoActive,
  videoRef,
}: {
  videoActive: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  return (
    <div className="site-backdrop fixed inset-0 z-0 overflow-hidden bg-background" aria-hidden="true">
      <img
        className="site-backdrop-image absolute inset-0 h-full w-full object-cover"
        src={backdropImageUrl}
        alt=""
      />
      <video
        ref={videoRef}
        className={`site-backdrop-video h-full w-full object-cover ${
          videoActive ? "" : "is-hidden"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/58" />
      <div className="backdrop-grid absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
    </div>
  );
}

function IconLink({
  children,
  href,
  icon: Icon,
  external = false,
}: {
  children: import("react").ReactNode;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}) {
  return (
    <a
      className="liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[0.32fr_1fr]">
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-muted-foreground">
        <Trophy className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2
        className="max-w-5xl text-5xl font-normal leading-none text-foreground sm:text-7xl"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h2>
    </div>
  );
}
