import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        blue: {
          50: { value: "#ebf8ff" },
          100: { value: "#bee3f8" },
          200: { value: "#90cdf4" },
          300: { value: "#63b3ed" },
          400: { value: "#4299e1" },
          500: { value: "#3182ce" },
          600: { value: "#86ddff" },
          700: { value: "#2c5282" },
          800: { value: "#2a4365" },
          900: { value: "#1A365D" },
        },
      },
    },
    semanticTokens: {
  colors: {
    pageBg: {
      value: {
        base: "{colors.blue.600}",
        _dark: "{colors.blue.900}",
      },
    },
    textColor: {
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.gray.100}",
      },
    },
  },
}
  },
});

export const system = createSystem(defaultConfig, config);