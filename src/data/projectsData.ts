import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "ammmigo-react-datepicker",
    title: "Ammmigo — Custom React Date Range Picker",
    description:
      "Commercial freelance project built for an international Upwork client. Features custom date-range selection, Flatpickr integration, stateful UI logic, and responsive CSS styling for booking/scheduling flows.",
    tags: ["React 18", "Flatpickr", "CSS Modules", "Upwork Freelance"],
    githubUrl: "https://github.com/xovrashok/ammmigo-react-datepicker",
    image: "/projects/ammmigo.png",
    featured: true,
  },
  {
    id: "ai-cover-letter-assistant",
    title: "AI Cover Letter Assistant",
    description:
      "A Manifest V3 Chrome Extension that automates job application responses on Djinni and Work.ua. It parses vacancy details directly from the page DOM and generates personalized cover letters using the Google Gemini API.",
    tags: [
      "React 18",
      "TypeScript",
      "Chrome Extension (MV3)",
      "Gemini API",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/xovrashok/ai-cover-letter-assistant",
    image: "/projects/ai-cover-letter-assistant.png",
    featured: true,
  },
  {
    id: "job-tracker-extension",
    title: "Job Application Tracker (Chrome Extension)",
    description:
      "A browser extension for automatically collecting and tracking job openings from Djinni and Work.ua. It includes dynamic content script injection, local data storage, status filtering, and real-time text search.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chrome Extension API (Manifest V3)",
    ],
    githubUrl: "https://github.com/xovrashok/job-tracker-extension",
    image: "/projects/job-tracker-extension.png",
    featured: true,
  },
  {
    id: "image-search",
    title: "PixelFind — Image Search App",
    description:
      "Responsive image search application powered by Unsplash API, custom modal view, and Formik validation.",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Unsplash API", "Formik"],
    githubUrl: "https://github.com/xovrashok/unsplash-photo-gallery",
    image: "/projects/pixelfind.png",
    featured: true,
  },
  {
    id: "phonebook",
    title: "Phonebook / Client Hub",
    description:
      "Contact management web app with JWT authentication, Redux Toolkit state persistence, and REST API integration.",
    tags: ["React 18", "Redux Toolkit", "Axios", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/xovrashok/react-phonebook",
    image: "/projects/phonebook.png",
    featured: true,
  },
  {
    id: "movieFinder",
    title: "MovieFinder — Discover & Search Movies",
    description:
      "A React movie search application built with React Router 6, Axios, and TMDB API. Features nested routes for movie details, cast, and reviews, location state history for the back button, search query syncing via URL, and code splitting with React.lazy and Suspense.",
    tags: ["React", "React-Router", "Axios", "Tailwind CSS", "TMDB API"],
    githubUrl: "https://github.com/xovrashok/react-movies-search",
    image: "projects/moviefinder.png",
    featured: true,
  },
];
