const themeSwapper = require("tailwindcss-theme-swapper");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    themeSwapper({
      themes: [
        // The only required theme is `base`. Every property used in
        // other themes must exist in here.
        {
          name: "base",
          selectors: [":root"],
          theme: {
            colors: {
              primary: "#f00",
            },
          },
        },
        {
          name: "dark",
          selectors: [".dark"],
          mediaQuery: "@media (prefers-color-scheme: dark)",
          theme: {
            colors: {
              primary: "#0000",
            },
          },
        },
        {
          name: "matrix",
          selectors: [".matrix"],
          theme: {
            colors: {
              primary: "#0f0",
            },
          },
        },
      ],
    }),
  ],
};
