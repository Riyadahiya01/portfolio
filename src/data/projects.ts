export interface Project {
  slug: string;
  title: string;
  tagline: string;

  status: "Completed" | "In Progress" | "Planned";
  featured: boolean;

  github: string;
  liveDemo?: string;

  banner: string;

  technologies: string[];

  caseStudy: {
    overview: string;
    businessProblem: string;
    solution: string;

    architectureImage: string;

    screenshots: {
      title: string;
      image: string;
    }[];

    highlights: string[];
    futureImprovements: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "terraform-employee-onboarding",

    title: "Terraform Employee Onboarding Automation",

    tagline:
      "Production-inspired Infrastructure as Code project built with Terraform.",

    status: "Completed",

    featured: true,

    github:
      "https://github.com/Riyadahiya01/terraform-employee-onboarding",

    banner:
"/projects/terraform-employee-onboarding/banner.png",

    technologies: [
      "Terraform",
      "HCL",
      "Git",
      "GitHub",
      "VS Code"
    ],

    caseStudy: {
      overview:
        "A Terraform-based Infrastructure as Code project that automates employee onboarding using reusable Terraform templates.",

      businessProblem:
        "Manual onboarding is repetitive, time consuming and difficult to standardize.",

      solution:
        "Built a modular Terraform project using the Local Provider to automatically generate onboarding documents and reports.",

      architectureImage:
        "/projects/terraform-employee-onboarding/architecture.webp",

      screenshots: [],

      highlights: [
        "Reusable Terraform Modules",
        "Template Files",
        "Variables & Outputs",
        "Production Inspired Folder Structure",
        "Local Provider"
      ],

      futureImprovements: [
        "AWS Provider",
        "S3 Remote Backend",
        "DynamoDB State Locking"
        
      ]
    }
  }
];