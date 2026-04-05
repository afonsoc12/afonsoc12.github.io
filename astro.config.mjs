import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { execSync } from "child_process";

const commitSha = (() => {
  try {
    return execSync("git rev-parse --short=7 HEAD").toString().trim();
  } catch {
    return "unknown";
  }
})();

// https://astro.build/config
export default defineConfig({
  site: "https://afonsocosta.dev",
  base: "/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    define: {
      __COMMIT_SHA__: JSON.stringify(commitSha),
    },
  },
});
