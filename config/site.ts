export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SecurePass",
  description: "Gerenciador de Senhas Seguras.",
  navItems: [
    { label: "Inicio", href: "/" },
    { label: "Credenciais", href: "/credentials" },
    { label: "Notas", href: "/notes" },
    { label: "Cartões", href: "/cards" },
    { label: "Wifi's", href: "/wifi" },
    { label: "Sobre", href: "/about" },
  ],
  navMenuItems: [
    { label: "Inicio", href: "/" },
    { label: "Credenciais", href: "/credentials" },
    { label: "Notas", href: "/notes" },
    { label: "Cartões", href: "/cards" },
    { label: "Wifi's", href: "/wifi" },
    { label: "Sobre", href: "/about" },
    { label: "Logout", href: "/logout" },
  ],
  links: {
    github: "https://github.com/Yokuny",
    linkedin: "https://linkedin.com/in/yokuny/",
  },
};

export type data = {
  title: string;
  url: string;
  user: string;
  password: string;
};

export const fakerItems: data[] = [
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
];
