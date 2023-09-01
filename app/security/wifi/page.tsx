"use client";

import { Card, CardBody, Button } from "@nextui-org/react";
import CardTitle from "@/components/CardTitle";
import CardList from "@/components/CardList";

import { fakerItems } from "@/config/site";

export default function AboutPage() {
  return (
    <Card>
      <CardTitle />
      <CardBody className="md:gap-3 gap-4">
        {fakerItems.map((item, index) => (
          <CardList key={index} item={item} />
        ))}
      </CardBody>
    </Card>
  );
}
