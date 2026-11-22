import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/SectionWrapper";

const AllProjects = [
  {
    name: "Nucleus",
    desc: "An AI workspace platform that helps individuals and teams access, manage, and collaborate with multiple AI tools through a single unified dashboard.",
    longDesc:
      "Nucleus brings multiple AI tools into a single unified dashboard, so individuals and teams can access, manage, and collaborate without juggling tabs and subscriptions. Built with Nuxt.js, TypeScript, and Tailwind CSS.",
    tags: ["Nuxt.js", "Tailwind CSS", "TypeScript"],
    color: "blue",
    link: "https://nucleus-ashy.vercel.app",
    repo: null,
    image: "/nucleus-ashy-vercel-app.png",
  },
  {
    name: "AniTracker",
    slug: "anitracker",
    desc: "An anime watchlist website, to organize your favorite animes and get good recommendations of trending animes.",
    longDesc:
      "AniTracker is an anime watchlist app for organizing your favorites and discovering trending shows. Track what you are watching, plan what is next, and get recommendations. Built with Vue.js, Tailwind CSS, and Supabase for auth and data.",
    tags: ["Vue.js", "Tailwind CSS", "Supabase"],
    color: "yellow",
    link: "https://ani-tracker-beta.vercel.app",
    repo: null,
    image: "/ani-tracker-beta-vercel-app.png",
  },

  {
    name: "ApexPanel",
    slug: "apexpanel",
    desc: "ApexPanel is a fullstack admin dashboard application designed to be a secure, centralized control panel for managing users, products, and system access.",
    longDesc:
      "ApexPanel is a full-stack admin dashboard: a secure, centralized control panel for managing users, products, and system access. Built with Vue.js, Tailwind CSS, Node.js, and Express.js.",
    tags: ["Vue.js", "Tailwind CSS", "Node.js", "Express.js"],
    color: "mint",
    link: "https://apex-panel.vercel.app",
    repo: null,
    image: "apex-panel-vercel-app.png",
  },

  {
    name: "Hedraios",
    slug: "hedraios",
    desc: "An offline-first daily faith journal with timestamped notes, prayer tracking, and scripture logging in one calm place. Everything saves instantly on-device and syncs to Supabase when online.",
    longDesc: `Hedraios is an offline-first daily faith journal — timestamped notes, prayer tracking, and scripture logging in one calm place. Everything saves instantly on-device and syncs to Supabase backend when online. Built with React and Supabase for real-time sync across devices.`,
    tags: ["React", "Supabase", "TypeScript", "Tailwind CSS", "PWA"],
    color: "purple",
    link: "https://hedraios.vercel.app",
    repo: "https://github.com/romeoxii/hedraios",
    image: "/hedraios-vercel-app.png",
  },
];

export const Route = createFileRoute("/projects")({
  component: () => (
    <div className="w-full max-w-6xl mt-12 mx-auto space-y-10">
      <h1>Projects</h1>
    </div>
  ),
});
