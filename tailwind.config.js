module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(255,255,255)",
        myShadow2: "-4.1px -5px 0 0 rgb(255,255,255)",
      },
    },
  },
  plugins: [],
};
