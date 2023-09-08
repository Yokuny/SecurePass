import { listItem } from "@/types";
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SecurePass",
  description: "Gerenciador de Senhas Seguras.",

  privatePages: [
    { label: "Credenciais", href: "/security/" },
    { label: "Cartões", href: "/security/cards" },
    { label: "Notas", href: "/security/notes" },
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
    username: "facebook_username123",
    password: "pass123",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    username: "insta_username456",
    password: "instaPass789",
  },
  {
    title: "Twitter",
    url: "https://www.twitter.com/",
    username: "twitter_username789",
    password: "twitPass012",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
    username: "linkedin_username345",
    password: "linkPass234",
  },
  {
    title: "Pinterest",
    url: "https://www.pinterest.com/",
    username: "pin_username567",
    password: "pinPass567",
  },
  {
    title: "Reddit",
    url: "https://www.reddit.com/",
    username: "reddit_username890",
    password: "redPass890",
  },
  {
    title: "Snapchat",
    url: "https://www.snapchat.com/",
    username: "snap_username123",
    password: "snapPass123",
  },
  {
    title: "WhatsApp",
    url: "https://www.whatsapp.com/",
    username: "whatsapp_username456",
    password: "whatsPass456",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/",
    username: "tiktok_username789",
    password: "tikPass789",
  },
  {
    title: "Netflix",
    url: "https://www.netflix.com/",
    username: "netflix_username345",
    password: "netPass345",
  },
  {
    title: "Pinterest",
    url: "https://www.pinterest.com/",
    username: "pin_username567",
    password: "pinPass567",
  },
];
