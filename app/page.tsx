"use client";
import Banner from "@/components/home/Banner";
import FirstSection from "@/components/home/FirstSection";
import MyProduct from "@/components/home/MyProduct";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="min-h-screen container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <FirstSection />
        <Divider />
        <MyProduct />
      </section>
    </>
  );
}
