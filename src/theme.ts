import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#f0f9ff" },
          100: { value: "#e0f2fe" },
          200: { value: "#bae6fd" },
          300: { value: "#7dd3fc" },
          400: { value: "#38bdf8" },
          500: { value: "#0ea5e9" },
          600: { value: "#0284c7" },
          700: { value: "#0369a1" },
          800: { value: "#075985" },
          900: { value: "#0c4a6e" },
          950: { value: "#082f49" },
        },
      },
    },
    semanticTokens: {
      colors: {
        pageBg: {
          value: {
            base: "{colors.primary.50}",
            _dark: "{colors.primary.950}",
          },
        },
        cardBg: {
          value: {
            base: "{colors.white}",
            _dark: "{colors.primary.800}",
          },
        },
        cardBorder: {
          value: {
            base: "{colors.primary.200}",
            _dark: "{colors.primary.600}",
          },
        },
        textColor: {
          value: {
            base: "{colors.primary.900}",
            _dark: "{colors.primary.50}",
          },
        },
        subtleText: {
          value: {
            base: "{colors.primary.600}",
            _dark: "{colors.primary.300}",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);