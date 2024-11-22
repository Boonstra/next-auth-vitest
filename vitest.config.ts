import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    clearMocks: true,
    coverage: {
      exclude: ["**/*.stories.ts?(x)", "**/*.mock?(Data).ts?(x)"],
      include: [
        "app",
        "auth",
        "components",
        "conf",
        "containers",
        "helpers",
        "i18n",
        "layouts",
        "services",
      ],
      reporter: ["html", "text", "text-summary", "cobertura", "lcov"],
    },
    environment: "jsdom",
    globals: true,
    include: ["**/*.test.ts?(x)"],
    setupFiles: ["./vitest.setup.tsx"],
  },
});
