"use client";
import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

import Logo from "./navbar-Logo";
import Tabs from "./navbar-Tabs";
import MobileMenu from "./navbar-mobileMenu";
import DesktopMenu from "./navbar-desktopMenu";

import { siteConfig } from "@/config/site";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [routes, setRoutes] = useState(siteConfig.navItems);
  const [loggedIn, serLoggedIn] = useState(false);

  const path = usePathname();
  const securityRoute = "/security";

  useEffect(() => {
    if (path.startsWith(securityRoute)) {
      serLoggedIn(true);
      setRoutes(siteConfig.privatePages);
    } else {
      serLoggedIn(false);
      setRoutes(siteConfig.navItems);
    }
  }, [path]);

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <Logo />
        <Tabs routes={routes} />
      </NavbarContent>
      <DesktopMenu />
      <MobileMenu routes={routes} loggedIn={loggedIn} />
    </NextUINavbar>
  );
};

export default Navbar;
