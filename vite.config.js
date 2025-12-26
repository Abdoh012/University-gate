// Github things
import path from "path";

// Tailwind
import tailwindcss from "@tailwindcss/vite";

// React
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Million js (Makes yur app faster)
import million from "million/compiler";

// https://vite.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/University-gate/", // EXACT repo name
});
