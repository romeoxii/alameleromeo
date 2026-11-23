export type Fave = {
  title: string;
  cover: string;
  href: string;
};

export const faves: { label: string; items: Fave[] }[] = [
  {
    label: "Watching",
    items: [
      {
        title: "Kuroko no Basket",
        cover: "/covers/kuroko.jpg",
        href: "https://anilist.co/search/anime?search=Kuroko%20no%20Basket",
      },
      {
        title: "Attack on Titan",
        cover: "/covers/aot.jpg",
        href: "https://anilist.co/search/anime?search=Attack%20on%20Titan",
      },
      {
        title: "Fullmetal Alchemist",
        cover: "/covers/fma.jpg",
        href: "https://anilist.co/search/anime?search=Fullmetal%20Alchemist%20Brotherhood",
      },
    ],
  },
  {
    label: "Reading",
    items: [
      {
        title: "Overgeared",
        cover: "/covers/overgeared.jpg",
        href: "https://anilist.co/search/manga?search=Overgeared",
      },
      {
        title: "Absolute Regression",
        cover: "/covers/absolute-regression.jpg",
        href: "https://anilist.co/search/manga?search=Absolute%20Regression",
      },
      {
        title: "Murim Login",
        cover: "/covers/murim-login.jpg",
        href: "https://anilist.co/search/manga?search=Murim%20Login",
      },
      {
        title: "Reaper of the Drifting Moon",
        cover: "/covers/reaper-drifting-moon.jpg",
        href: "https://anilist.co/search/manga?search=Reaper%20of%20the%20Drifting%20Moon",
      },
    ],
  },
];
