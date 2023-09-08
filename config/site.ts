export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SecurePass",
  description: "Gerenciador de Senhas Seguras.",

  privatePages: [
    { label: "Credenciais", href: "/security" },
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
