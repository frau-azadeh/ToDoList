const config = {
  plugins: {
    "@tailwindcss/postcss": {
      sources: [
        { pattern: "app/**/*.{js,ts,jsx,tsx,mdx}", negated: false },
        { pattern: "components/**/*.{js,ts,jsx,tsx,mdx}", negated: false },
      ],
    },
  },
};

export default config;
