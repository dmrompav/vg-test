import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    // Use BASE_PATH provided by CI for GitHub Pages (e.g., /vg-test/)
    base: process.env.BASE_PATH ?? "/",
  };
});
