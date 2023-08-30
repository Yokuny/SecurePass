export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SecurePass",
  description: "Gerenciador de Senhas Seguras.",
  navItems: [
    { label: "Inicio", href: "/" },
    { label: "Credenciais", href: "/credentials" },
    { label: "Notas", href: "/notes" },
    { label: "Cartões", href: "/cards" },
    { label: "Senhas de wifi", href: "/wifi" },
    { label: "Sobre", href: "/about" },
  ],
  navMenuItems: [
    { label: "Inicio", href: "/" },
    { label: "Credenciais", href: "/credentials" },
    { label: "Notas", href: "/notes" },
    { label: "Cartões", href: "/cards" },
    { label: "Senhas de wifi", href: "/wifi" },
    { label: "Sobre", href: "/about" },
    { label: "Logout", href: "/logout" },
  ],
  links: {
    github: "https://github.com/Yokuny",
    linkedin: "https://linkedin.com/in/yokuny/",
  },
};
