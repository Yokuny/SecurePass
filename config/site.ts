import { listItem } from "@/types";
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SecurePass",
  description: "Gerenciador de Senhas Seguras.",

  privatePages: [
    { label: "Inicio", href: "/security/" },
    { label: "Sites", href: "/security/sites" },
    { label: "Cartões", href: "/security/cards" },
    { label: "Wifi", href: "/security/wifi" },
  ],

  navItems: [
    { label: "Inicio", href: "/" },
    { label: "Entrar", href: "/login" },
    { label: "Contato", href: "/contact" },
    { label: "Sobre", href: "/about" },
  ],
};

export const fakerItems: listItem[] = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/",
    user: "facebook_user123",
    password: "pass123",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    user: "insta_user456",
    password: "instaPass789",
  },
  {
    title: "Twitter",
    url: "https://www.twitter.com/",
    user: "twitter_user789",
    password: "twitPass012",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
    user: "linkedin_user345",
    password: "linkPass234",
  },
  {
    title: "Pinterest",
    url: "https://www.pinterest.com/",
    user: "pin_user567",
    password: "pinPass567",
  },
  {
    title: "Reddit",
    url: "https://www.reddit.com/",
    user: "reddit_user890",
    password: "redPass890",
  },
  {
    title: "Snapchat",
    url: "https://www.snapchat.com/",
    user: "snap_user123",
    password: "snapPass123",
  },
  {
    title: "WhatsApp",
    url: "https://www.whatsapp.com/",
    user: "whatsapp_user456",
    password: "whatsPass456",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/",
    user: "tiktok_user789",
    password: "tikPass789",
  },
  {
    title: "Netflix",
    url: "https://www.netflix.com/",
    user: "netflix_user345",
    password: "netPass345",
  },
  {
    title: "Pinterest",
    url: "https://www.pinterest.com/",
    user: "pin_user567",
    password: "pinPass567",
  },
];
