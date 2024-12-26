import React from "react";
import AppTemplate from "../components/layouts/AppTemplate";
import Button from "../components/ui/Button";
import HomeWorkCard from "../components/ui/Home/HomeWorkCard";
import SectionWrapper from "../components/layouts/SectionWrapper";
import portfolioData from "../data/data";

export default function Home() {
  const todayDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const { personalInfo } = portfolioData;

  return (
    <AppTemplate>
      <SectionWrapper>
        <section>
          <div className="flex flex-col gap-6">
            <div>
              <div className="h-16 w-16 rounded-full bg-color-placeholder"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h1>{personalInfo.name}</h1>
              <p>{personalInfo.greeting.replace("day", todayDay)}</p>
            </div>
            <div>
              <p>{personalInfo.description}</p>
            </div>
            {/* CTA */}
            <div>
              <Button>
                <p>Contact</p>
              </Button>
            </div>
          </div>
          <div className="mt-10 border">Clients List</div>
        </section>

        <section>
          <h1>Work</h1>
          <HomeWorkCard />
        </section>

        <section>
          <h1>Spotlight</h1>
        </section>

        <section>
          <h1>Side Projects</h1>
        </section>

        <section>
          <h1>Social Validation</h1>
        </section>

        <section>
          <h1>Tech Stack</h1>
        </section>
      </SectionWrapper>
    </AppTemplate>
  );
}
