"use client";
import Banner from "@/components/home/Banner";
import FirstSection from "@/components/home/FirstSection";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="min-h-screen container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <FirstSection />
      </section>
    </>
  );
}
