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
  `Contributed to UX discussions, delivered dashboard using
  Svelte and Tailwindcss. Ideation (Figma) and implementation of product landing page
  (Astro-React). Optimised website for faster load times, Integrated Analytics
  and performed SEO for visibility. `,
  "Front-End Developer",
  "Osvauld",
  "08/2023 – present | Remote, India"
);

hoverChangeExperience(
  ".freelance",
  `Worked on internal dashboard (React) for process
  monitoring and Invoice automation using chrome-extension
  for a client based In Spain.
  Worked with businesses for creating pixel perfect landing
  pages.`,
  "Web Developer",
  "Freelance",
  "04/2022 – 07/2023 | Bengaluru, India"
);

// hoverChangeExperience(
//   ".sibca",
//   `Worked as Extra low voltage systems service engineer in
//   multi-story built environments. Handled all maintenance aspects Simplex fire alarm systems
//   and Emergency lighting controls. Executed resource allocation, prepared documentation and
//   Incident reports.`,
//   "Associate service Engineer",
//   "SIBCA",
//   "05/2019 – 06/2021 | Dubai, UAE"
// );
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
