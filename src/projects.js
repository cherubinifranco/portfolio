import { cardIcons } from "./files/icons";

export const beanIt = {
  name: "Bean It",
  url: "/beanit",
  description: "Automated Email Sender from Excel Data",
  repository: "https://github.com/cherubinifranco/beanit",
  overview:
    "Bean It is a desktop application that automates bulk email delivery based on .xlsx spreadsheets. It reads structured data and generates personalized messages using variable placeholders linked to each column, making it ideal for small businesses or teams that need quick, personalized communication.",
  features: [
    "Reads .xlsx files and maps data to custom email templates.",
    "Up to four configurable message presets with dynamic text variables.",
    "Offline-first design — all data and settings are stored locally for privacy and reliability.",
    "Simple, responsive interface designed for productivity. No unnecesary ",
    "Built as a cross-platform desktop app using modern web technologies.",
  ],
  stack: ["React", "Electron", "NodeJs", "Tailwind"],
  imgs: [""],
  cards: [
    {
      icon: cardIcons.code,
      url: "github.com/cherubinifranco/beanit",
      title: "Access the Code",
      description:
        "Want to fork the project and create your own version. Or just want browse the code? Access the project repository and taka a look",
      button: "external",
      buttonText: "Go to Repository",
    },
    {
      icon: cardIcons.download,
      url: "github.com/cherubinifranco/beanit/releases/latest",
      title: "Try the app",
      description:
        "If you found this project useful or want to explore it further, you can download the application directly",
      button: "external",
      buttonText: "Go to Repository",
    },
  ],
};

export const bchmap = {
  name: "BCH Map",
  url: "/bchmap",
  description: "Interactive Map of Businesses Accepting Bitcoin Cash",
  overview:
    "BCH Map is a web application that visualizes businesses accepting Bitcoin Cash (BCH) through an interactive map interface. It allows users to explore local merchants, view business details, and interact with dynamically updated data in a clean and accessible layout.",
  features: [
    "Interactive map with custom markers representing BCH-friendly businesses.",
    "Dynamic data rendering and automatic updates for new or modified listings.",
    "Responsive, mobile-friendly UI for smooth navigation on any device.",
    "Clean marker popups displaying merchant details, categories, and location.",
    "Lightweight and optimized front-end focused on simplicity and usability.",
  ],
  stack: ["React", "Leaflet.js", "NodeJs", "Tailwind"],
  imgs: [""],
};
