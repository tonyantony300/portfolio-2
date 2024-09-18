import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".osvauld",
  `Member of the founding engineering team, Created a performant landing website & web-application of Osvauld, The site has 12K monthly
visitors, loads under 1 second. `,
  "Front-End Engineer",
  "Osvauld",
  "08/2023 – present | Remote, India"
);

hoverChangeExperience(
  ".freelance",
  `Developed responsive and interactive UI components using React and Tailwind CSS, enhancing user
experience across various screen sizes and devices.`,
  "Junior Software Developer",
  "Caprolok Technologies",
  "08/2022 – 04/2023 | Bengaluru, India"
);

hoverChangeExperience(
  ".sibca",
  `Programmed various life safety systems in 14+ ultra-highrise buildings.`,
  "Associate service Engineer",
  "SIBCA",
  "05/2019 – 06/2021 | Dubai, UAE"
);
hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a stylesheet language composed of 'layers', created with the purpose of styling pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements on web pages."
);
hoverChangeDescription(".sass", "Astro helps to build fast static site");
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on creating component-based user interfaces."
);
hoverChangeDescription(
  ".next",
  "State management made perfect with the wide adoption of Redux"
);
hoverChangeDescription(
  ".styled",
  "AWS provides on-demand cloud computing which is incredibly convenient"
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a CSS framework that provides utility classes for styling pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features not present in the language natively, as well as making it static."
);
hoverChangeDescription(".radix", "Open-source Version control software");
hoverChangeDescription(
  ".cypress",
  "Cypress is a framework for end-to-end testing automation, currently using the JavaScript language."
);
hoverChangeDescription(
  ".storybook",
  "Svelte surgically changes DOM with compiler op resulting in tiny UI shippment"
);
