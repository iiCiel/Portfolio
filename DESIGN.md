# Design: the analyst file

The site reads like a printed incident report, not a hacker terminal.

**Why.** The work Soliman shows is investigation plus write-up: SOC case reports, TLP:AMBER incident reports, lab reports, a game that grades your decisions. A report is the honest frame for that. It also avoids the two defaults of the category: the dark neon "hacker" page and the purple-gradient AI template.

**Rules**
- Paper and ink. Warm off-white `--paper`, near-black `--ink`, a secondary ink for labels. Light theme on purpose: recruiters read this at a desk in daylight.
- One accent: TLP amber `#FFC000`, used only as a highlighter (the marker sweep in the intro, link underlines, text selection, focus halo). Never as a text color on paper.
- The masthead carries a real `TLP:CLEAR` marking, which is the Traffic Light Protocol level for "fine to share publicly". It's true of this page.
- Type: Archivo (variable width, condensed heavy) for headings and labels; Source Serif 4 for reading text; IBM Plex Mono only for data (dates, tool lists, ATT&CK IDs).
- Layout: report side heads. Section title on the left (sticky on desktop), content on the right, hairline rules between sections. No card grids.
- Screenshots are evidence: real captures, 1px ink border, a soft offset shadow, a caption that says what you are looking at.
- Motion: one moment, the amber marker drawing under one phrase on load. Off with reduced motion.

**Don't add:** gradient glows, background video, emoji icons, stat-counter heroes, eyebrow labels above headings, monospace as decoration.
