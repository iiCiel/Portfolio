import type { Project } from "./content";

import coTitle from "../assets/img/cyber-office-title.webp";
import coTitleSm from "../assets/img/cyber-office-title-sm.webp";
import coRed from "../assets/img/cyber-office-redteam.webp";
import coRedSm from "../assets/img/cyber-office-redteam-sm.webp";
import coSiem from "../assets/img/cyber-office-siem.webp";
import coSiemSm from "../assets/img/cyber-office-siem-sm.webp";
import hacklab from "../assets/img/hacklab-coach.webp";
import hacklabSm from "../assets/img/hacklab-coach-sm.webp";
import hak from "../assets/img/hakrathon-hub.webp";
import hakSm from "../assets/img/hakrathon-hub-sm.webp";
import elantra from "../assets/img/elantra-bench.webp";
import elantraSm from "../assets/img/elantra-bench-sm.webp";

export const featured: Project = {
  id: "cyber-office",
  name: "Cyber Office",
  summary:
    "A pixel-art browser game where you spend a week as the junior security analyst at a fictional insurance company. You triage the inbox, hunt through SIEM logs and a working terminal, take the phone calls, and see what each choice costs the company.",
  built: [
    "The Week: five days with one attacker group. Phishing and a Tor brute force on Monday, MFA fatigue, SQL injection, a vendor email compromise, then Friday ransomware with three endings decided by your backup choices.",
    "16 Case Files: 12 real breaches rebuilt from public reports (Uber, MGM, Colonial Pipeline, SolarWinds and more) and 4 labs. Each ends with the real timeline and the MITRE ATT&CK techniques with fixes.",
    "Red team engagement: a scripted attacker terminal with 8 ATT&CK-tagged moves from recon to a proof flag, then a SOC debrief where you find the log line each move left in a 123-event SIEM.",
    "Simulated tools: a Splunk-style SPL console, an Ubuntu shell with grep, awk, sed and jq, PowerShell with the Active Directory cmdlets, and working aws and az CLIs.",
    "Every decision is graded against a CompTIA Security+ (SY0-701) objective. 223 unit tests plus browser smoke tests that play the days and cases end to end.",
  ],
  stack: ["Phaser 3", "Vite", "JavaScript", "Tiled", "Web Audio", "Playwright", "GitHub Actions"],
  links: [
    { label: "Play it in your browser", href: "https://iiciel.github.io/cyber-office/" },
    { label: "Source on GitHub", href: "https://github.com/iiCiel/cyber-office" },
  ],
  shots: [
    {
      src: coTitle,
      srcSm: coTitleSm,
      w: 1440,
      h: 900,
      alt: "Cyber Office title screen: pixel-art office behind a menu with Start Monday, Case Files, Red team engagement and Difficulty, next to a whiteboard listing Monday to Friday.",
      caption: "Title screen. Pick a weekday, a real-breach case file or the red team engagement.",
    },
    {
      src: coRed,
      srcSm: coRedSm,
      w: 1140,
      h: 800,
      alt: "Simulated attacker terminal showing nmap and smbclient output with ATT&CK technique tags and a proof token, next to an 8-step kill chain list.",
      caption: "Red team engagement. Each command is tagged with its ATT&CK technique; nothing is actually executed.",
    },
    {
      src: coSiem,
      srcSm: coSiemSm,
      w: 1140,
      h: 884,
      alt: "SOC debrief screen: the eight attacker moves on the left, four already matched, and a searchable list of nginx, firewall and sshd log events on the right.",
      caption: "SOC debrief. Switch seats and find the log line each of your moves left behind.",
    },
  ],
};

export const projects: Project[] = [
  {
    id: "hacklab-coach",
    name: "HackLab Coach",
    summary:
      "A training platform where beginners work real-looking investigations with an AI coach that asks questions instead of giving the answer. Built for the OpenAI Codex Creator Challenge, April 2026.",
    built: [
      "11 labs from beginner to advanced, including SSH brute force, phishing, ransomware, DNS exfiltration and lateral movement, each mapped to MITRE ATT&CK.",
      "Evidence viewer where you click log lines to mark them, plus a Socratic coach that streams its replies token by token.",
      "Rubric grading that turns your findings into a TLP:AMBER style incident report, then generates a follow-up lab aimed at your weakest skill.",
      "Progress dashboard with a skill radar, saved in the browser, and a demo mode that runs without an API key.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Groq (Llama 3.3 70B)", "Recharts"],
    links: [{ label: "Source on GitHub", href: "https://github.com/iiCiel/hacklab-coach" }],
    shots: [
      {
        src: hacklab,
        srcSm: hacklabSm,
        w: 1440,
        h: 900,
        alt: "HackLab Coach lab 'Suspicious SSH Login': an auth.log with failed and accepted password lines marked as evidence, four of five objectives checked, and the AI coach confirming the analysis.",
        caption: "The SSH brute force lab. Marked auth.log lines on the left, the coach on the right.",
      },
    ],
  },
  {
    id: "hakrathon-hub",
    name: "HAkrathon Hub",
    summary:
      "The team portal for HAkrathon 2026, the University of Akron College of Business hackathon on November 6. One site for participants, mentors, judges and organizers.",
    built: [
      "Team chat, a shared code editor that runs Python, JavaScript, C, C++, Java and Bash, and a mentor help queue, all updating live.",
      "Student code runs in a throwaway Docker container with no internet, a read-only system, a 384 MB memory cap and a 10 second limit.",
      "Automatic build freeze that records each team's GitHub commit at the deadline, so back-dated pushes don't count.",
      "Judging on a weighted rubric with tie-breaks, awards, CSV exports and an offline judging package in case the network goes down.",
    ],
    stack: ["Node.js", "Express", "Socket.IO", "SQLite", "Monaco", "Pyodide", "Docker"],
    links: [
      { label: "See the project page", href: "https://iiciel.github.io/hakrathon-hub/" },
      { label: "Source on GitHub", href: "https://github.com/iiCiel/hakrathon-hub" },
    ],
    shots: [
      {
        src: hak,
        srcSm: hakSm,
        w: 1440,
        h: 900,
        alt: "HAkrathon Hub code tab in demo mode: a team's main.py open in the editor and its output in a terminal panel, with a dinner time and checkpoint countdown in the header.",
        caption: "The shared editor in demo mode, running a team's Python in the browser sandbox.",
      },
    ],
  },
  {
    id: "elantra-bench",
    name: "Elantra Bench",
    summary:
      "An interactive 3D model of my own 2018 Elantra and its 2.0 L engine. I use it to narrow down what's wrong and to practice a repair before I touch the real car.",
    built: [
      "93 parts you can tap in 3D or pick from a list, each with what it does, how it fails and service notes.",
      "80 symptoms in 13 groups with ranked causes that light up on the model, and synthesized example sounds for 26 noises.",
      "12 step-by-step repair jobs where parts come off and go back on in 3D, plus explode, X-ray and firing-order views.",
    ],
    stack: ["three.js", "JavaScript", "WebGL", "Web Audio", "Playwright"],
    links: [],
    note: "Personal tool, not published.",
    shots: [
      {
        src: elantra,
        srcSm: elantraSm,
        w: 1440,
        h: 900,
        alt: "3D model of a four-cylinder engine with intake runners and radiator, a firing-order readout, and a side panel with a photo of a real engine bay marked with orange hotspots.",
        caption: "Engine view with the firing-order readout and the hotspot photo of my own engine bay.",
      },
    ],
  },
];
