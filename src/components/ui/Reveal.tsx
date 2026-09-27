"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "ul" | "li";
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  className,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const MotionComponent = motion[as] as typeof motion.div;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: "div" | "ul" | "section";
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className,
  as = "div",
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as] as typeof motion.div;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
  y = 16,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  y?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as] as typeof motion.div;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionComponent
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
