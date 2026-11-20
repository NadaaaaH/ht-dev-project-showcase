import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { prices, projects, projectCategories } from "@/lib/ht-dev-data";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("lists the static website minimum at Rp90,000", () => {
    expect(prices.find((item) => item.name === "Website Static")?.price).toBe("Mulai Rp90.000");
  });

  it("lists the full-stack website minimum at Rp400,000", () => {
    expect(prices.find((item) => item.name === "Website Full-Stack")?.price).toBe(
      "Mulai Rp400.000",
    );
  });

  it("lists the Android app minimum at Rp700,000", () => {
    expect(prices.find((item) => item.name === "Mobile App (Android)")?.price).toBe(
      "Mulai Rp700.000",
    );
  });

  it("lists both UI/UX design rates per page", () => {
    expect(prices.find((item) => item.name === "UI/UX Design (Figma)")?.price).toBe(
      "Rp15.000–20.000/halaman",
    );
  });

  it("maps every portfolio order button to an available service", () => {
    for (const project of projects) {
      expect(projectCategories).toContain(project.orderCategory);
    }
  });
});
