import { useMemo, useState } from "react";
import axios from "axios";
import { Input } from "@nextui-org/input";
import {
  Button,
  Modal,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import RegisterConfirmationModal from "./RegisterConfirmationModal";
import { ModalProp, postCardProps } from "@/types";
import { titleRegex, creditCardRegex, cvvRegex, passwordRegex, dateRegex } from "@/utils/regex";
import { bearerToken } from "@/utils/bearerToken";
import { inputValidation } from "@/utils/inputValidation";

const API = process.env.NEXT_PUBLIC_API;
const requestString = `${API}cards`;

const CardsForm = ({ onClose }: ModalProp) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [type, setType] = useState(new Set(["BOTH"]));

  const [titleErr, setTitleErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [numberErr, setNumberErr] = useState(false);
  const [cvvErr, setCvvErr] = useState(false);
  const [expirationDateErr, setExpirationDateErr] = useState(false);
  const [cardPasswordErr, setCardPasswordErr] = useState(false);

  const handleCardType = (keys: Set<string>) => {
    setType(keys);
  };

  const postCredentials = async () => {
    const partesData = expirationDate.split("-");
    if (partesData.length === 3) {
      const ano = partesData[0].slice(-2);
      const mes = partesData[1];
      const validData = `${mes}/${ano}`;

      const data = {
        title: title,
        number: number,
        name: name,
        cvv: cvv,
        expirationDate: validData,
        password: cardPassword,
        isVirtual: false,
        type: type.has("BOTH") ? "BOTH" : type.has("CREDIT") ? "CREDIT" : "DEBT",
      };

      try {
        await axios.post(requestString, data, bearerToken);
        onOpen();
        alert("Cartão cadastrado com sucesso!");
      } catch (err) {
        alert("Erro ao cadastrar cartão!");
        setTitleErr(true);
        setNameErr(true);
        setNumberErr(true);
        setCvvErr(true);
        setExpirationDateErr(true);
        setCardPasswordErr(true);
      }
    } else {
      setExpirationDateErr(true);
    }
  };

  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 my-4">
        <Input
          onChange={(e) =>
            inputValidation({
              value: e.target.value,
              set: setTitle,
              setErr: setTitleErr,
              regex: titleRegex,
            })
          }
          color={titleErr ? "danger" : "success"}
          label="Título"
          size="md"
          variant="faded"
        />

        <div className="inline-flex w-full gap-3">
          <div className="w-full">
            <Input
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setName,
                  setErr: setNameErr,
                  regex: titleRegex,
                })
              }
              color={nameErr ? "danger" : "success"}
              label="Titular"
              size="md"
              variant="faded"
            />
          </div>
          <div className="max-w-[210px]">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="faded"
                  className="capitalize h-full text-success max-w-[210px] w-full md:px-7">
                  {type}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                onSelectionChange={(keys) => handleCardType(keys as Set<string>)}>
                <DropdownItem key="CREDIT">CREDIT</DropdownItem>
                <DropdownItem key="DEBT">DEBT</DropdownItem>
                <DropdownItem key="BOTH">BOTH</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div className="inline-flex w-full gap-3.5">
          <div className="w-full">
            <Input
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setNumber,
                  setErr: setNumberErr,
                  regex: creditCardRegex,
                })
              }
              classNames={{
                input: [
                  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                ],
              }}
              color={numberErr ? "danger" : "success"}
              label="Número do cartão"
              type="number"
              size="md"
              variant="faded"
            />
          </div>
          <div className="max-w-[110px]">
            <Input
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setCvv,
                  setErr: setCvvErr,
                  regex: cvvRegex,
                })
              }
              classNames={{
                input: [
                  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                ],
              }}
              color={cvvErr ? "danger" : "success"}
              label="CVV"
              type="number"
              size="md"
              variant="faded"
            />
          </div>
        </div>

        <div className="inline-flex w-full gap-3.5">
          <div>
            <Input
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setExpirationDate,
                  setErr: setExpirationDateErr,
                  regex: dateRegex,
                })
              }
              color={expirationDateErr ? "danger" : "success"}
              label="Validade"
              placeholder=" "
              type="date"
              size="md"
              variant="faded"
            />
          </div>
          <div className="w-full">
            <Input
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setCardPassword,
                  setErr: setCardPasswordErr,
                  regex: passwordRegex,
                })
              }
              color={cardPasswordErr ? "danger" : "success"}
              label="Senha"
              size="md"
              variant="faded"
            />
          </div>
        </div>
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
export default CardsForm;
