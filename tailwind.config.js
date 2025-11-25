// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // رنگ‌های خود را اینجا اضافه کنید
      colors: {
        // حالت ساده: یک رنگ تک
        "my-brand": "#ff5733",
        secondary: "#3b82f6",

        // حالت حرفه‌ای: طیف رنگی (Shades)
        "custom-blue": {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff", // رنگ اصلی وقتی کلاسی مثل bg-custom-blue می‌دید
          dark: "#009eeb",
          100: "#cffafe",
          200: "#a5f3fc",
          500: "#06b6d4",
          900: "#164e63",
        },
      },
    },
  },
  plugins: [],
};
