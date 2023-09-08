import { useState } from "react";
import axios from "axios";
import { Input } from "@nextui-org/input";
import { Button, Modal, useDisclosure } from "@nextui-org/react";

import RegisterConfirmationModal from "./RegisterConfirmationModal";
import { ModalProp, inputProps, postCredentialsProps } from "@/types";
import { titleRegex, urlRegex, userPasswordRegex } from "@/utils/regex";
import { bearerToken } from "@/utils/bearerToken";
import { inputValidation } from "@/utils/inputValidation";

const API = process.env.NEXT_PUBLIC_API;
const requestString = `${API}credentials`;

const CredentialsForm = ({ onClose }: ModalProp) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [urlErr, setUrlErr] = useState(false);
  const [titleErr, setTitleErr] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const postCredentials = async ({ url, title, user, password }: postCredentialsProps) => {
    const data = {
      url,
      title,
      username: user,
      password,
    };

    try {
      await axios.post(requestString, data, bearerToken);
      onOpen();
    } catch (err) {
      setUrlErr(true);
      setTitleErr(true);
      setUserErr(true);
      setPasswordErr(true);
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
        <Input
          color={urlErr ? "danger" : "success"}
          label="URL"
          type="url"
          size="md"
          variant="faded"
          onChange={(e) =>
            inputValidation({
              value: e.target.value,
              set: setUrl,
              setErr: setUrlErr,
              regex: urlRegex,
            })
          }
        />
        <Input
          color={userErr ? "danger" : "success"}
          label="Usuário"
          size="md"
          variant="faded"
          onChange={(e) =>
            inputValidation({
              value: e.target.value,
              set: setUser,
              setErr: setUserErr,
              regex: userPasswordRegex,
            })
          }
        />
        <Input
          color={passwordErr ? "danger" : "success"}
          label="Senha"
          size="md"
          variant="faded"
          onChange={(e) =>
            inputValidation({
              value: e.target.value,
              set: setPassword,
              setErr: setPasswordErr,
              regex: userPasswordRegex,
            })
          }
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button color="primary" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          fullWidth
          color="success"
          className="text-white"
          onClick={() => {
            postCredentials({
              url,
              title,
              user,
              password,
            });
          }}>
          Salvar
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <RegisterConfirmationModal onClose={onClose} />
        </Modal>
      </div>
    </form>
  );
};
export default CredentialsForm;
