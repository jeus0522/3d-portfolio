// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/jeus522/3d-portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Senior Front-end Developer",
    company_name: "Beqom",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2015 - April 2017",
    points: [
      "Uplifted legacy UI elements into a modern React framework for this global HR product.",
      "Fixed migration issues and challenges between a legacy and modern UI approach.",
      "Improved stability and performance, making the product considerably better.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Kalios, Inc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2017 - Feb 2019",
    points: [
      "Improved the performance of a Node.js back-end project by changing the approach and libraries that were being used.",
      "Updated and fixed some issues related to FunCaptcha on the project.",
      "Developed a new solution approach for the issue the client faced with FunCaptcha, increasing performance at least tenfold.",
    ],
  },
  {
    title: "Senior Full-stack Developer",
    company_name: "TrackerBuddy",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2019 - Jan 2022",
    points: [
      "Developed the ability to create custom trackers and built components in React and Ruby on Rails.",
      "Built a user interface to display the tracker's data in different ways: calendars, line charts, and bar charts.",
      "Used Redux for state management, developed action creators and reducers.",
      "Built the entire control flow, from sign-up to login and account deletion. Developed React components and Ruby on Rails models and controllers.",
      "Developed a responsive application to work on mobile devices.",
      "Developed an API for front-end React components with token authentication.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Citibank",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Acted as lead project developer, prepared a demonstration to the board member of Citibank, and designed the architecture for complex documentation analysis service with React, OpenAI, prompt engineering, RAG, and LangChain (Python).",
      "Designed the front-end architecture with React router, React query, and Redux toolkit for a scalable and maintainable structure.",
      "Led the design of an in-house primitive UI library for better developer velocity.",
      "Adopted a concrete testing strategy for delivering complex Go applications, including front and back end.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Shopify Site for Ledbury",
    description:
      "An ever-changing Shopify site that includes many common eCommerce elements and features, including sort and filtering, \
      newsletter signup, gift cards, lazy loading images, mega dropdown menus, and ADA and SEO optimization..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://www.ledbury.com/",
    live_site_link: "https://www.ledbury.com/",
  },
  {
    name: "Droppp",
    description:
      "Droppp is the premier platform for buying and collecting pop culture NFTs with super easy and secure purchase methods and \
      I worked on this project as a full-stack developer, implementing purchase/transfer/ delivery logic and notification system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://droppp.io",
    live_site_link: "https://droppp.io",
  },
  {
    name: "Foxie",
    description:
      "Foxie is a cloud communication platform to personalize customer communications in a simple, flexible, and cost-effective way. \
      I worked on the admin dashboard where business owners can manage their direct inward dialing numbers (DID) and billings.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://foxie.com",
    live_site_link: "https://foxie.com",
  },
  {
    name: "Kiwi.com - Airline Ticket Booking",
    description:
      "As a senior software engineer, I implemented the payment module using card payments, Apple payments, and others. \
      The main focus was on system reliability and error handling. My team used an advanced monitoring tool (Datadog) and reports to track all payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "http://www.kiwi.com",
    live_site_link: "http://www.kiwi.com",
  },
  {
    name: "WooCommerce Website for Diet Store",
    description:
      "Ketogrocer.my is a WooCommerce-based eCommerce site that sells food products for keto dieters in Malaysia. \
      I built the site entirely for the client, from the design of the site, the logo, and the content, to the setting up of the payment gateways.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "http://ketogrocer.my",
    live_site_link: "http://ketogrocer.my",
  },
  {
    name: "Design and Development of a Government COVID-19 Data Portal",
    description:
      "I designed and built the back end and data pipelines, data storytelling, visualization of key COVID-19 indicators, and modeling of vaccination projections.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://covidnow.moh.gov.my/",
    live_site_link: "https://covidnow.moh.gov.my/",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/davidjeus",
  },
] as const;
