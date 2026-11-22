export type Project = {
  name: string;
  desc: string;
  link: string;
  repo: string | null;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Nucleus",
    desc: "Nucleus brings multiple AI tools into a single unified dashboard, so individuals and teams can access, manage, and collaborate without juggling tabs and subscriptions. Built with Nuxt.js, TypeScript, and Tailwind CSS.",
    link: "https://nucleus-ashy.vercel.app",
    repo: "https://github.com/romeoxii/Nucleus",
    image: "/nucleus-ashy-vercel-app.png",
  },
  {
    name: "AniTracker",
    desc: "AniTracker is an anime watchlist app for organizing your favorites and discovering trending shows. Track what you are watching, plan what is next, and get recommendations. Built with Vue.js, Tailwind CSS, and Supabase for auth and data.",
    link: "https://ani-tracker-beta.vercel.app",
    repo: "https://github.com/romeoxii/AniTracker",
    image: "/ani-tracker-beta-vercel-app.png",
  },

  {
    name: "ApexPanel",
    desc: "ApexPanel is a full-stack admin dashboard: a secure, centralized control panel for managing users, products, and system access. Built with Vue.js, Tailwind CSS, Node.js, and Express.js.",
    link: "https://apex-panel.vercel.app",
    repo: "https://github.com/romeoxii/ApexPanel",
    image: "apex-panel-vercel-app.png",
  },

  {
    name: "Hedraios",
    desc: `Hedraios is an offline-first daily faith journal — timestamped notes, prayer tracking, and scripture logging in one calm place. Everything saves instantly on-device and syncs to Supabase backend when online. Built with React and Supabase for real-time sync across devices.`,
    link: "https://hedraios.vercel.app",
    repo: "https://github.com/romeoxii/hedraios",
    image: "/hedraios-vercel-app.png",
  },
];
