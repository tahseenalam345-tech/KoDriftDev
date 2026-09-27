import { TeamMember } from "@/types";

/**
 * Team members list for KoDriftDev.
 * To add a new team member, append an object to this array.
 * Assets should be placed in /public/images/team/<image-name>.jpg
 */
export const teamMembers: TeamMember[] = [
  {
    name: "Tahseen",
    role: "Team Lead & Developer",
    shortBio:
      "Tahseen leads product development at KoDriftDev, building high-performance websites, applications, SaaS platforms, and AI-enabled systems with modern development tools and AI coding workflows.",
    image: "/images/team/tahseen.webp",
    linkedin: null,
    github: "https://github.com/kodriftdev",
  },
  {
    name: "Bisma",
    role: "Lead Generation & Outreach",
    shortBio:
      "Bisma manages lead research, outreach, and early client discovery. She helps KoDriftDev understand business needs before a project starts and makes sure the right solution reaches the right client.",
    image: "/images/team/bisma.webp",
    linkedin: null,
    github: null,
  },
  {
    name: "Areeba",
    role: "Client Communication & Content",
    shortBio:
      "Areeba manages client communication, social media, and content coordination. She keeps projects clear, organized, and easy to follow from the first conversation to final delivery.",
    image: "/images/team/areeba.webp",
    linkedin: null,
    github: null,
  },
];
