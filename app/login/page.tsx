"use client";
import Title from "./loginTItle";
import LoginLogout from "./loginLogout";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      <Title />
      <LoginLogout />
    </section>
  );
}
