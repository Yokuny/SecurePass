"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardBody } from "@nextui-org/react";

import CardList from "@/components/cards/looking/ListItem";
import { bearerToken } from "@/utils/bearerToken";

export default function NotesPage() {
  const API = process.env.NEXT_PUBLIC_API;
  const [notes, setNotes] = useState([]);
  const requestString = `${API}notes`;

  useEffect(() => {
    const getNotes = async () => {
      try {
        const notes = await axios.get(requestString, bearerToken);
        setNotes(notes.data);
      } catch (err) {
        alert("err");
      }
    };

    getNotes();
  }, []);

  return (
    <>
      <CardBody className="md:gap-3 gap-4">
        {notes?.length === 0 ? (
          <div className="h-full flex items-center justify-center w-full">
            <h1 className="w-2/4 text-center">Comece adicionando um novo item!</h1>
          </div>
        ) : (
          <>
            {notes?.map((item, index) => (
              <CardList key={index} item={item} id={index} requestString={requestString} />
            ))}
          </>
        )}
      </CardBody>
    </>
  );
}
