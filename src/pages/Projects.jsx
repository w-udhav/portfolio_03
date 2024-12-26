import React from "react";
import AppTemplate from "../components/layouts/AppTemplate";
import SectionWrapper from "../components/layouts/SectionWrapper";
import Section from "../components/layouts/Section";
import ProjectsCard from "../components/ui/ProjectsCard";

export default function Projects() {
  return (
    <AppTemplate>
      <SectionWrapper>
        <Section className="flex flex-col gap-1">
          <h1>Projects</h1>
          <p>
            Here are a few projects that showcase my work and creativity. While
            there are many more, I’ve curated a selection to keep this portfolio
            concise and focused.
          </p>
        </Section>

        <Section>
          <ProjectsCard />
        </Section>
      </SectionWrapper>
    </AppTemplate>
  );
}
