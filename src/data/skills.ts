export type Skill = {
  name: string;
  level: number; // 0-100
  category: "Cloud" | "DevOps" | "Systems" | "Security" | "Tools";
  description: string;
  icon: string; // emoji or short label
};

export const skills: Skill[] = [
  {
    name: "AWS",
    level: 72,
    category: "Cloud",
    description: "EC2, S3, IAM, VPC, Lambda, CloudWatch, RDS — building hands-on labs and architectures.",
    icon: "☁️",
  },
  {
    name: "Cloud Fundamentals",
    level: 80,
    category: "Cloud",
    description: "Compute, storage, networking, identity, scaling, regions and availability zones.",
    icon: "🌐",
  },
  {
    name: "Networking",
    level: 70,
    category: "Systems",
    description: "TCP/IP, DNS, subnets, routing, VPC peering, security groups, NACLs.",
    icon: "🔗",
  },
  {
    name: "Linux",
    level: 75,
    category: "Systems",
    description: "Shell, file systems, permissions, processes, systemd, package management.",
    icon: "🐧",
  },
  {
    name: "Security",
    level: 68,
    category: "Security",
    description: "IAM policies, least privilege, MFA, KMS, security best practices on AWS.",
    icon: "🛡️",
  },
  {
    name: "GitHub & Git",
    level: 78,
    category: "Tools",
    description: "Branching, PRs, code review workflows, GitHub Actions basics.",
    icon: "🐙",
  },
  {
    name: "CI/CD",
    level: 60,
    category: "DevOps",
    description: "GitHub Actions, build/test/deploy pipelines for cloud workloads.",
    icon: "⚙️",
  },
  {
    name: "Containers",
    level: 58,
    category: "DevOps",
    description: "Docker fundamentals, images, containers, basics of orchestration.",
    icon: "📦",
  },
  {
    name: "Infrastructure as Code",
    level: 55,
    category: "DevOps",
    description: "Learning Terraform & CloudFormation for repeatable infrastructure.",
    icon: "🏗️",
  },
  {
    name: "Monitoring",
    level: 62,
    category: "DevOps",
    description: "CloudWatch metrics, logs, alarms, and observability fundamentals.",
    icon: "📊",
  },
];
