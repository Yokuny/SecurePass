"use client";
import { Card } from "@nextui-org/react";
import CardTitle from "@/components/cards/looking/ListTitle";
import CardOptions from "@/components/cards/creating/ListFooterOptions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <Card isFooterBlurred className="h-[530px] md:h-[700px]">
        <CardTitle />
        {children}
        <CardOptions />
      </Card>
    </section>
  );
};
export default Layout;
