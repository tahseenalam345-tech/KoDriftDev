import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36">
      <Container className="text-center flex flex-col items-center">
        <span className="text-sm font-bold uppercase tracking-wider text-accent">
          Error 404
        </span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-text">
          Page not found.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted max-w-md">
          The page you are looking for doesn&apos;t exist, has been relocated, or is currently
          under development.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Return to Home
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            Browse Services
          </Button>
        </div>
      </Container>
    </div>
  );
}
