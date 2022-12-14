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

        VerySmallPhones: { max: "338.9px" },

        RangeForPhone: { min: "200px", max: "1023px" },
        // => @media (min-width: 200px) and (max-width:1023px) { ... }

        MediumPhones: { min: "320px", max: "375.9px" },
        // // => @media (min-width: 375px) { ... }

        Phone1: { max: "640px" },
        Phone2: { min: "640px", max: "746px" },

        Phones: { min: "338px", max: "425.9px" },
        InbetweenPhone: { min: "426px", max: "560px" },

        AllPhones: { max: "767px" },

        LargePhones: { min: "425px", max: "767px" },
        // => @media (min-width: 425px) { ... }

        TabletIN: { min: "768px", max: "871px" },
        Tablet: { min: "768px", max: "1023.9px" },
        // => @media (min-width: 768px) { ... }
        NotLaptop: { max: "1023.9px" },
        NotPhonesOrTablet: { min: "1024px" },

        LaptopButINB: { min: "1024px", max: "1199px" },
        Laptop: { min: "1024px", max: "1439px" },
        // => @media (min-width: 1024px) { ... }
        LaptopAlmost: { min: "1200px", max: "1439px" },

        LargeLaptop: "1440px",
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
