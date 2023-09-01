"use client";
import { Card } from "@nextui-org/react";
import CardTitle from "@/components/cards/CardTitle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <Card>
        <CardTitle />
        {children}
      </Card>
    </section>
  );
};
export default Layout;
