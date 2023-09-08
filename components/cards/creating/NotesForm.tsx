import { useState } from "react";
import axios from "axios";
import { Input } from "@nextui-org/input";
import { Button, Modal, Textarea, useDisclosure } from "@nextui-org/react";

import RegisterConfirmationModal from "./RegisterConfirmationModal";
import { ModalProp } from "@/types";
import { titleRegex } from "@/utils/regex";
import { bearerToken } from "@/utils/bearerToken";
import { inputValidation } from "@/utils/inputValidation";

const API = process.env.NEXT_PUBLIC_API;
const requestString = `${API}notes`;

const NotesForm = ({ onClose }: ModalProp) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [noteErr, setNoteErr] = useState(false);

  const postCredentials = async () => {
    const data = {
      title,
      text: note,
    };

    try {
      await axios.post(requestString, data, bearerToken);
      onOpen();
    } catch (err) {
      setTitleErr(true);
      setNoteErr(true);
    }
  };

  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 my-4">
        <Input
          color={titleErr ? "danger" : "success"}
          label="Título"
          size="md"
          variant="faded"
          onChange={(e) =>
            inputValidation({
              value: e.target.value,
              set: setTitle,
              setErr: setTitleErr,
              regex: titleRegex,
            })
          }
        />
        <Textarea
          color={noteErr ? "danger" : "success"}
          label="Nota"
          minRows={2}
          maxRows={6}
          variant="faded"
          onChange={(e) =>
            inputValidation({
              value: e.target.value,
              set: setNote,
              setErr: setNoteErr,
              regex: titleRegex,
            })
          }
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button color="primary" onClick={onClose}>
          Cancelar
        </Button>
        <Button fullWidth color="success" className="text-white" onClick={postCredentials}>
          Salvar
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <RegisterConfirmationModal onClose={onClose} />
        </Modal>
      </div>
    </form>
  );
};
export default NotesForm;
