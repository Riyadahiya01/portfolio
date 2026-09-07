export type Social = {
  id: string;
  label: string;
  href: string;
  iconType: "linkedin" | "github" | "email" | "aws";
  ariaLabel: string;
};

export const socials: Social[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/riya-dahiya-/",
    iconType: "linkedin",
    ariaLabel: "Visit Riya Dahiya on LinkedIn",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Riyadahiya01",
    iconType: "github",
    ariaLabel: "Visit Riya Dahiya on GitHub",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:dahiyariya007@gmail.com",
    iconType: "email",
    ariaLabel: "Email Riya Dahiya",
  },
  {
    id: "aws",
    label: "AWS Certifications",
    href: "#certifications",
    iconType: "aws",
    ariaLabel: "View AWS certifications",
  },
];
