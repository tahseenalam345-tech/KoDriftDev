import { ProcessStep } from "@/types";

export const processCopy = {
  heading: "Clear process. Practical delivery.",
  subheading:
    "You will always know what is happening, what we need from you, and what comes next.",
  endCta: {
    heading: "Ready to turn an idea into a working system?",
    buttonLabel: "Start a Project",
    href: "/contact",
  },
};

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Understand",
    description:
      "We start with your goals, current challenges, audience, and the outcome you want from the project.",
  },
  {
    number: 2,
    title: "Plan",
    description:
      "We turn the conversation into a clear scope, priorities, timeline, and practical recommendation.",
  },
  {
    number: 3,
    title: "Design",
    description:
      "We shape the user experience, visual direction, and key screens before the final build takes form.",
  },
  {
    number: 4,
    title: "Build",
    description:
      "We develop, test, refine, and keep you informed while the project becomes a working product.",
  },
  {
    number: 5,
    title: "Launch",
    description:
      "We launch with care, provide handover guidance, and discuss the next improvements when your business is ready.",
  },
];
