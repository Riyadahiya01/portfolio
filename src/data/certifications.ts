export type Certification = {
  id: string;
  title: string;
  issuer: string;
  status: "In Progress" | "Targeted" | "Achieved";
  date: string;
  description: string;
  badgeColor: string; // tailwind gradient
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "In Progress",
    date: "Targeting Q2",
    description:
      "Foundational understanding of AWS Cloud, services, pricing, security and the shared responsibility model.",
    badgeColor: "from-sky-400 via-blue-500 to-indigo-600",
  },
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    status: "Targeted",
    date: "Next milestone",
    description:
      "Design resilient, performant, secure and cost-optimised architectures on AWS using best practices.",
    badgeColor: "from-orange-400 via-amber-500 to-rose-500",
  },
  {
    id: "aws-sysops",
    title: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services",
    status: "Targeted",
    date: "Roadmap",
    description:
      "Deploy, manage and operate workloads on AWS — monitoring, automation, security and troubleshooting.",
    badgeColor: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    id: "aws-devops",
    title: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    status: "Targeted",
    date: "Long-term goal",
    description:
      "Implement continuous delivery systems, monitoring and incident response in distributed cloud environments.",
    badgeColor: "from-violet-500 via-purple-500 to-fuchsia-500",
  },
];
