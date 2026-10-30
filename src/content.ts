// Every fact on this page comes from Soliman's master resume notes or the
// project repos. Don't add numbers, employers or certs that aren't in those.

export const contact = {
  email: "solimansultan59@gmail.com",
  linkedin: "https://www.linkedin.com/in/soliman-alktaifan",
  linkedinLabel: "linkedin.com/in/soliman-alktaifan",
  github: "https://github.com/iiCiel",
  githubLabel: "github.com/iiCiel",
};

export const facts: { term: string; detail: string }[] = [
  { term: "Studying", detail: "B.S. Cybersecurity, University of Akron" },
  { term: "Record", detail: "4.0 GPA, President's List" },
  { term: "Graduating", detail: "December 2027" },
  { term: "Working", detail: "MSP intern at TechnologyXperts (TXI), Beachwood, OH" },
  { term: "Looking for", detail: "Security internships and co-ops in 2027" },
  { term: "Based in", detail: "Akron, Ohio. Open to relocating." },
];

export type Shot = { src: string; srcSm: string; alt: string; caption: string; w: number; h: number };

export type Project = {
  id: string;
  name: string;
  summary: string;
  built: string[];
  stack: string[];
  links: { label: string; href: string }[];
  note?: string;
  shots: Shot[];
};

export type LabEntry = {
  name: string;
  what: string;
  tools: string;
  when: string;
  link?: { label: string; href: string };
};

export const labs: LabEntry[] = [
  {
    name: "SOC Detection and Response Lab",
    what: "Splunk lab that collects Windows and Linux telemetry. Detections for failed logins, suspicious PowerShell, scheduled task persistence and privileged account changes, mapped to MITRE ATT&CK, with Python alert enrichment.",
    tools: "Splunk, Universal Forwarder, Sysmon, SPL, Python",
    when: "Mar 2026 to now",
  },
  {
    name: "Zippy AI information kiosk",
    what: "On-premise assistant for 2,000+ College of Business students, built by a 10-person team. I worked on search and retrieval across document types, crash prevention and the team's GitHub workflow.",
    tools: "Python, QML, Ollama",
    when: "2025 to now",
    link: { label: "Team repo", href: "https://github.com/dylondark/cob-zippy-ai" },
  },
  {
    name: "Network forensics labs",
    what: "PCAP analysis, Snort IDS rules and Splunk SPL hunts over custom CSV datasets, each written up as a formal lab report. Also SMTP PCAP, Linux and NTFS boot sector analysis.",
    tools: "Wireshark, tcpdump, Snort, Splunk",
    when: "2025 to 2026",
  },
  {
    name: "TryHackMe SOC Simulator",
    what: "Triaged live alert queues, sorted true and false positive phishing, investigated in Splunk and wrote case reports with IOCs and remediation.",
    tools: "Splunk, MITRE ATT&CK, kill chain",
    when: "2025 to now",
  },
  {
    name: "ZipsMarket",
    what: "A marketplace for University of Akron students, started by another UA student. I took it over and hardened it: payment and sign-in fixes, a checkout retry, keyboard focus fixes, and 99 unit and 125 browser tests.",
    tools: "React 19, Vite, Supabase, Stripe Connect, Playwright",
    when: "2026",
  },
  {
    name: "Daily Mood App",
    what: "Local-first Android app with 5 modules (mood journal, habits, pomodoro, tasks, life hub), 15+ SQLite tables, notification quick actions and a biometric lock.",
    tools: "React Native, Expo SDK 54, SQLite, EAS",
    when: "2025 to now",
    link: { label: "Source", href: "https://github.com/iiCiel/Daily-Mood-App" },
  },
  {
    name: "Cisco network labs",
    what: "Routed and switched topologies with VLANs, inter-VLAN routing, OSPF, DHCPv4 and DHCPv6, STP, EtherChannel and ACLs.",
    tools: "Cisco IOS, Packet Tracer",
    when: "2025",
  },
];

export const experience = [
  {
    role: "MSP Intern",
    org: "TechnologyXperts, Inc. (TXI)",
    place: "Beachwood, OH",
    when: "Oct 2026 to now",
    points: [
      "Part time. I train alongside MSP staff on help desk troubleshooting, IT systems and networking support for business clients.",
      "Building hands-on skills in security monitoring, cloud and backup and disaster recovery.",
    ],
  },
  {
    role: "Software Development Student Assistant",
    org: "University of Akron, College of Business Computer Labs",
    place: "Akron, OH",
    when: "Aug 2025 to now",
    points: [
      "Resolve 45+ support tickets across 3 computer labs inside a 24-hour SLA.",
      "Manage lab endpoints in Microsoft Intune: compliance, device health and deployments.",
      "Co-develop the Zippy AI kiosk for 2,000+ students, and set up the team's PR templates, branch protection and commit conventions.",
    ],
  },
  {
    role: "Resident Assistant",
    org: "University of Akron, Campus Housing",
    place: "Akron, OH",
    when: "Aug 2025 to now",
    points: [
      "First contact for safety and conduct for 40+ residents.",
      "Write incident reports and work with professional staff to resolve them. Run programs on personal safety and digital hygiene.",
    ],
  },
  {
    role: "IT Technician",
    org: "Construction and Development LTD",
    place: "Riyadh, Saudi Arabia",
    when: "Jun 2022 to Aug 2023",
    points: [
      "Ran IT for a 15-person office: provisioning, backup automation and help desk.",
      "Moved the main server during an office relocation with zero data loss and under 24 hours of downtime.",
      "Supported a SAMA regulatory compliance audit by organizing sensitive financial records.",
    ],
  },
];

export const record = [
  {
    title: "Midwest Regional CCDC",
    result: "5th place",
    when: "2025",
    detail: "Defended a corporate network against a professional red team while keeping business services running.",
  },
  {
    title: "OCRI Capture Ohio CTF",
    result: "7th of 68 teams",
    when: "Apr 2026",
    detail: "Team Lazy Bugs, 4,246 points over 5 hours: forensics, crypto, traffic analysis, reverse engineering.",
  },
  {
    title: "HTCIA Student Chapter",
    result: "Founding president",
    when: "Aug 2025 to now",
    detail: "Started the University of Akron chapter for digital forensics, incident response and OSINT. 15+ members, workshops and guest speakers.",
  },
];

export const skills: { group: string; items: string }[] = [
  { group: "Detection and SIEM", items: "Splunk (SPL), Snort, Sysmon, Windows event logs, MITRE ATT&CK, phishing triage, incident reports" },
  { group: "Forensics and testing", items: "Wireshark, tshark, tcpdump, Nmap, Nessus, Burp Suite, CyberChef, hashcat, John, Gobuster" },
  { group: "Networks and systems", items: "Cisco IOS (VLANs, OSPF, ACLs), Linux, Windows Server, Active Directory, Intune, AWS (EC2, S3, IAM), Docker basics" },
  { group: "Code", items: "Python, Bash, SQL, TypeScript, React, Next.js, React Native, C++, Git" },
  { group: "Governance", items: "NIST 800-53, NIST 800-63B, ISO/IEC 27001, SOC 2, GDPR, HIPAA, PCI-DSS" },
];

export const certs = {
  done: [
    "Google Cybersecurity Professional Certificate, 2025",
    "Cisco Networking Essentials, 2024",
    "Cisco IT Essentials, 2024",
    "Atlassian Jira Service Management Fundamentals, 2026",
    "TryHackMe: Jr Penetration Tester path (45+ rooms), SOC Simulator, Active Directory Basics",
  ],
  next: ["CompTIA Security+", "TryHackMe SOC Level 1"],
};
