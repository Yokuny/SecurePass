"use client";
import { Card } from "@nextui-org/react";
import CardTitle from "@/components/cards/ListTitle";
import CardOptions from "@/components/cards/ListFooterOptions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <Card>
        <CardTitle />
        {children}
        <CardOptions />
      </Card>
    </section>
  );
};
export default Layout;
