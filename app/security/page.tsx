"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardBody } from "@nextui-org/react";
import { bearerToken } from "@/utils/bearerToken";

import CardList from "@/components/cards/looking/ListItem";

export default function CredentialsPage() {
  const API = process.env.NEXT_PUBLIC_API;
  const [credentials, setCredentials] = useState([]);
  const requestString = `${API}credentials`;

  useEffect(() => {
    const getCredentials = async () => {
      try {
        const credentials = await axios.get(requestString, bearerToken);
        setCredentials(credentials.data);
      } catch (err) {
        alert("err");
      }
    };

    getCredentials();
  }, []);

  return (
    <>
      <CardBody className="md:gap-3 gap-4">
        {credentials?.length === 0 ? (
          <div className="h-full flex items-center justify-center w-full">
            <h1 className="w-2/4 text-center">Comece adicionando um novo item!</h1>
          </div>
        ) : (
          <>
            {credentials?.map((item, index) => (
              <CardList key={index} item={item} id={index} requestString={requestString} />
            ))}
          </>
        )}
      </CardBody>
    </>
  );
}
