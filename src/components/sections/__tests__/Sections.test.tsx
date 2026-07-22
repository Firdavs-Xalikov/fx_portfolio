import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LanguageProvider } from "../../../context/LanguageContext";
import { ThemeProvider } from "../../../context/ThemeContext";
import Hero from "../Hero";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Achievements from "../Achievements";
import FutureGoals from "../FutureGoals";
import Contact from "../Contact";

const renderWithProviders = (component: React.ReactElement) =>
  render(
    <ThemeProvider>
      <LanguageProvider>{component}</LanguageProvider>
    </ThemeProvider>
  );

describe("Section Components Render Tests", () => {
  it("renders Hero section without crashing", () => {
    const { container } = renderWithProviders(<Hero />);
    expect(container).toBeDefined();
    expect(container.textContent).toContain("Firdavs Xalikov");
  });

  it("renders About section without crashing", () => {
    const { container } = render(
      <LanguageProvider>
        <About />
      </LanguageProvider>
    );
    expect(container).toBeDefined();
  });

  it("renders Skills section without crashing", () => {
    const { container } = render(
      <LanguageProvider>
        <Skills />
      </LanguageProvider>
    );
    expect(container).toBeDefined();
  });

  it("renders Projects section without crashing", () => {
    const { container } = render(
      <LanguageProvider>
        <Projects />
      </LanguageProvider>
    );
    expect(container).toBeDefined();
  });

  it("renders Achievements section without crashing", () => {
    const { container } = render(
      <LanguageProvider>
        <Achievements />
      </LanguageProvider>
    );
    expect(container).toBeDefined();
  });

  it("renders FutureGoals section without crashing", () => {
    const { container } = render(
      <LanguageProvider>
        <FutureGoals />
      </LanguageProvider>
    );
    expect(container).toBeDefined();
  });

  it("renders Contact section without crashing", () => {
    const { container } = render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );
    expect(container).toBeDefined();
  });
});
