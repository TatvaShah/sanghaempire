import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Gurveer Sangha",
  tagline: "Mississauga barber at Sanctuary Grooming Lounge. Fresh fades, sharp cuts, now accepting new clients.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Mississauga, ON",
  siteUrl: "https://sanghaempire.vercel.app",

  theme: {
    preset: "barber-bold",
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mississauga barber",
    headline: "Fresh fades. Sharp lines.",
    subhead:
      "Book Gurveer Sangha at Sanctuary Grooming Lounge. Clean finishes and confident cuts. New clients welcome.",
    images: [
      { src: "/images/post-1.jpg", alt: "Fresh fade by Gurveer Sangha", width: 720, height: 1280 },
      { src: "/images/post-3.jpg", alt: "Sharp cut with a clean finish", width: 720, height: 1280 },
      { src: "/images/post-7.jpg", alt: "Fresh fade with sharp lines", width: 720, height: 1280 },
    ],
    primaryCta: { label: "Book now", href: "https://getsqr.co/gurveer-stylist" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Sanctuary Grooming Lounge",
    "300+ five-star reviews",
    "Now accepting new clients",
    "Book online or by DM",
  ],

  about: {
    title: "Your cut, done right",
    body: [
      "Gurveer Sangha is a Mississauga barber at Sanctuary Grooming Lounge, focused on fades, sharp lines, and a clean finish that feels ready for the night out.",
      "With 300+ five-star reviews and new clients welcome, lock in your appointment online or send a quick Instagram DM.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Fresh fade, fresh confidence", width: 720, height: 1280 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Classic barber cuts and grooming. Ask when you book for current pricing.",
    variant: "list",
    showPrices: false,
    priceNote: "Pricing confirmed when you book.",
    groups: [
      {
        title: "Cuts and grooming",
        items: [
          { name: "Fades" },
          { name: "Tapers" },
          { name: "Haircuts" },
          { name: "Beard tidy" },
          { name: "Line ups" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cuts",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 720,
        height: 1280,
        alt: "That fresh fade hits different",
        caption: "That fresh fade hits different",
        href: "https://www.instagram.com/sanghaempire/reel/Dd7GjdZtKER/",
      },
      {
        src: "/images/post-2.jpg",
        width: 720,
        height: 1280,
        alt: "Fresh fade, fresh confidence",
        caption: "Fresh fade, fresh confidence",
        href: "https://www.instagram.com/sanghaempire/reel/DcJdDpTz-DA/",
      },
      {
        src: "/images/post-3.jpg",
        width: 720,
        height: 1280,
        alt: "Sharp cut, clean finish",
        caption: "Sharp cut. Clean finish",
        href: "https://www.instagram.com/sanghaempire/reel/Db4gAnDA2Js/",
      },
      {
        src: "/images/post-7.jpg",
        width: 720,
        height: 1280,
        alt: "Fresh fade with sharp lines",
        caption: "Fresh fade. Sharp lines",
        href: "https://www.instagram.com/sanghaempire/reel/DdHjs9NBnRQ/",
      },
      {
        src: "/images/post-8.jpg",
        width: 720,
        height: 1280,
        alt: "Fresh cut, clean finish",
        caption: "Fresh cut. Clean finish",
        href: "https://www.instagram.com/sanghaempire/reel/DchPkjCOOhX/",
      },
      {
        src: "/images/post-5.jpg",
        width: 720,
        height: 1280,
        alt: "Your next cut is calling",
        caption: "Your next cut is calling",
        href: "https://www.instagram.com/sanghaempire/reel/Ddrh6UjRMb3/",
      },
      {
        src: "/images/post-4.jpg",
        width: 720,
        height: 1280,
        alt: "Spots filling up, book your cut",
        caption: "Lock in your cut",
        href: "https://www.instagram.com/sanghaempire/reel/Dd66oJfP_Om/",
      },
      {
        src: "/images/post-6.jpg",
        width: 720,
        height: 1280,
        alt: "Night out ready cut",
        caption: "Night out ready",
        href: "https://www.instagram.com/sanghaempire/reel/DdP2qVoN1oq/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "sanghaempire",
    embeds: [
      "https://www.instagram.com/sanghaempire/reel/Dd7GjdZtKER/",
      "https://www.instagram.com/sanghaempire/reel/DcJdDpTz-DA/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "Book now",
    title: "Book your appointment",
    intro:
      "Book online through Square, or send an Instagram DM with your preferred date and style.",
    dmMessage:
      "Hi Gurveer! I would like to book a cut.\nPreferred date:\nPreferred time:\nStyle (fade, taper, haircut, beard, line up):\nNotes:",
    links: [{ label: "Book now", href: "https://getsqr.co/gurveer-stylist" }],
    note: "Now accepting new clients at Sanctuary Grooming Lounge in Mississauga.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Use the Book now button for the online booking page, or send an Instagram DM with your preferred date, time, and style.",
    },
    {
      q: "Where do you work?",
      a: "Gurveer cuts at Sanctuary Grooming Lounge in Mississauga.",
    },
    {
      q: "Are you taking new clients?",
      a: "Yes. New clients are welcome. Spots fill up, so booking ahead helps.",
    },
    {
      q: "What should I mention when I book?",
      a: "Share your preferred date and time, and the style you want, such as a fade, taper, haircut, beard tidy, or line up.",
    },
  ],

  contact: {
    title: "Contact and booking",
    area: "Mississauga, Ontario (Sanctuary Grooming Lounge)",
  },

  seo: {
    title: "Gurveer Sangha | Mississauga Barber",
    description:
      "Mississauga barber at Sanctuary Grooming Lounge. Fresh fades, sharp cuts, 300+ five-star reviews. Book online or by Instagram DM.",
    keywords: [
      "Mississauga barber",
      "Gurveer Sangha barber",
      "Sanctuary Grooming Lounge",
      "fade haircut Mississauga",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
