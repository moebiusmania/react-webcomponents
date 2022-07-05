import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base: string | undefined =
  process.env.NODE_ENV === "production" ? "/react-webcomponents/" : "";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
});
