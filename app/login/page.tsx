"use client";
import Title from "./loginTItle";
import LoginLogout from "./LoginSignin";
import { useEffect } from "react";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 md:pt-20">
      <Title />
      <LoginLogout />
    </section>
  );
}
