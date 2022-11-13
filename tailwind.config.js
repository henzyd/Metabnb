/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        TextBlack: "#434343",
        FooterBgColor: "#1D1D1E",
        FooterTextColor: "#F1F3F9",
        TextPink: "#A02279",
      },
      backgroundImage: {
        ButtonBgColor: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
      },
      screens: {
        SmallPhones: { min: " 220px", max: "380px" },
        // => @media (min-width: 320px) { ... }

        RangeForPhone: { min: "200px", max: "1023px" },
        // => @media (min-width: 200px) and (max-width:1023px) { ... }

        // MediumPhones: "375px",
        // // => @media (min-width: 375px) { ... }

        LargePhones: { min: "425px", max: "767px" },
        // => @media (min-width: 425px) { ... }

        Tablet: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px) { ... }

        Laptop: { min: "1024px", max: "1439px" },
        // => @media (min-width: 1024px) { ... }

        LargeLaptop: "1440px",
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
