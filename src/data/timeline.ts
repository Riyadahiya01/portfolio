export type TimelineEvent = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  icon: string;
  highlights: string[];
};

export const timeline: TimelineEvent[] = [
  {
    id: "bsc",
    title: "B.Sc. Science",
    subtitle: "Foundation in Scientific Thinking",
    period: "Undergraduate",
    description:
      "Built a strong foundation in analytical reasoning, experimentation, and methodical problem-solving.",
   icon: "graduation",
    highlights: ["Scientific method", "Analytical thinking", "Research basics"],
  },
  {
    id: "msc",
    title: "M.Sc. Chemistry",
    subtitle: "Deepening Research Discipline",
    period: "Postgraduate",
    description:
      "Trained in rigorous research, lab work, structured documentation and complex problem decomposition.",
   icon: "chemistry",
    highlights: ["Research methodology", "Lab discipline", "Technical writing"],
  },
  {
    id: "research",
    title: "Research & Analysis",
    subtitle: "Applied Analytical Mindset",
    period: "Transition Phase",
    description:
      "Worked on structured analysis and documentation — strengthening attention to detail and process orientation.",
   icon: "research",
    highlights: ["Pattern recognition", "Data interpretation", "Process design"],
  },
  {
    id: "cloud-learning",
    title: "Cloud Learning Journey",
    subtitle: "Self-Directed Cloud Engineering",
    period: "Active",
    description:
      "Deep-diving into AWS services, Linux, Networking, Security and DevOps through hands-on labs and projects.",
   icon: "cloud",
    highlights: ["AWS core services", "Hands-on labs", "Project-driven learning"],
  },
  {
    id: "aws-engineer",
    title: "AWS Cloud Engineer",
    subtitle: "Career Goal",
    period: "Next",
    description:
      "Joining a forward-thinking team to design, build and operate secure, scalable AWS infrastructure.",
   icon: "badge",
    highlights: ["Architecting solutions", "Operating workloads", "Continuous growth"],
  },
];
