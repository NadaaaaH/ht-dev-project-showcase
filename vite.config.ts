import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    plugins: [
      {
        name: "allow-vercel-sandbox",
        config() {
          return {
            server: {
              allowedHosts: true, // Mengizinkan semua host preview (termasuk *.vercel.run)
            },
          };
        },
      },
    ],
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});