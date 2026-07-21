import { render, screen, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LanguageProvider, useLanguage } from "../LanguageContext";

function TestConsumer() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="title">{t("hero_title")}</span>
      <span data-testid="fallback">{t("non_existent_key_123")}</span>
      <button onClick={() => setLanguage("uz")}>Switch UZ</button>
      <button onClick={() => setLanguage("ru")}>Switch RU</button>
    </div>
  );
}

describe("LanguageContext", () => {
  it("provides default language 'en' and correct translations", () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId("lang")).toHaveTextContent("en");
    expect(screen.getByTestId("title")).toHaveTextContent("Firdavs Xalikov");
  });

  it("switches languages correctly", () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    const uzBtn = screen.getByText("Switch UZ");
    act(() => {
      uzBtn.click();
    });

    expect(screen.getByTestId("lang")).toHaveTextContent("uz");
    expect(document.documentElement.lang).toBe("uz");
  });

  it("falls back to English or key string if translation is missing", () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId("fallback")).toHaveTextContent("non_existent_key_123");
  });
});
