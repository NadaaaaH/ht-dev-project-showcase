import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { prices } from "@/lib/ht-dev-data";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("lists the static website price at Rp90k", () => {
    expect(prices.find((item) => item.name === "Web Statis")?.price).toBe("Rp90k");
  });

  it("lists the fullstack web price at Rp400k", () => {
    expect(prices.find((item) => item.name === "Web Sistem Fullstack")?.price).toBe("Rp400k");
  });

  it("lists the Android app price at Rp500k", () => {
    expect(prices.find((item) => item.name === "Mobile App Android")?.price).toBe("Rp500k");
  });

  it("lists the UI/UX design price at Rp150k", () => {
    expect(prices.find((item) => item.name === "Desain UI/UX Figma")?.price).toBe("Rp150k");
  });

  it("lists the exclusive package starting at Rp2.5jt+", () => {
    expect(prices.find((item) => item.name === "Paket Eksklusif")?.price).toBe("Rp2,5jt+");
  });
});
