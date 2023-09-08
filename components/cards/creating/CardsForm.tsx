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
import { titleRegex, creditCardRegex, cvvRegex, userPasswordRegex } from "@/utils/regex";
import { bearerToken } from "@/utils/bearerToken";
import { inputValidation } from "@/utils/inputValidation";

const API = process.env.NEXT_PUBLIC_API;
const requestString = `${API}cards`;

const CardsForm = ({ onClose }: ModalProp) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [isVirtual, setIsVirtual] = useState(false);
  const [type, setType] = useState(new Set(["BOTH"]));

  const [titleErr, setTitleErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [numberErr, setNumberErr] = useState(false);
  const [cvvErr, setCvvErr] = useState(false);
  const [expirationDateErr, setExpirationDateErr] = useState(false);
  const [isVirtualErr, setIsVirtualErr] = useState(false);

  const handleCardType = (keys: Set<string>) => {
    setType(keys);
  };

  const postCredentials = async (cardInfo: postCardProps) => {
    const data = {
      title: cardInfo.title,
      name: cardInfo.name,
      number: cardInfo.number,
      cvv: cardInfo.cvv,
      expirationDate: cardInfo.expirationDate,
      password: cardInfo.password,
      isVirtual: cardInfo.isVirtual,
      type: cardInfo.type,
    };

    try {
      await axios.post(requestString, data, bearerToken);
      onOpen();
    } catch (err) {
      setTitleErr(true);
      setNameErr(false);
      setNumberErr(false);
      setCvvErr(false);
      setExpirationDateErr(false);
      setIsVirtualErr(false);
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
        <div className="inline-flex w-full gap-3">
          <div className="w-full">
            <Input
              color={nameErr ? "danger" : "success"}
              label="Nome"
              size="md"
              variant="faded"
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setName,
                  setErr: setNameErr,
                  regex: titleRegex,
                })
              }
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
              color={numberErr ? "danger" : "success"}
              label="Número"
              type="number"
              size="md"
              variant="faded"
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setNumber,
                  setErr: setNumberErr,
                  regex: creditCardRegex,
                })
              }
            />
          </div>
          <div className="max-w-[110px]">
            <Input
              color={cvvErr ? "danger" : "success"}
              label="CVV"
              type="number"
              size="md"
              variant="faded"
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setCvv,
                  setErr: setCvvErr,
                  regex: cvvRegex,
                })
              }
            />
          </div>
        </div>

        <div className="inline-flex w-full gap-3">
          <div className="w-full">
            <Input
              color={numberErr ? "danger" : "success"}
              label="Número"
              type="number"
              size="md"
              variant="faded"
              onChange={(e) =>
                inputValidation({
                  value: e.target.value,
                  set: setNumber,
                  setErr: setNumberErr,
                  regex: creditCardRegex,
                })
              }
            />
          </div>
        </div>

        {/* <Checkbox
          label="Cartão Virtual"
          isChecked={isVirtual}
          onChange={(isChecked) => setIsVirtual(isChecked)}
        />
        <Select label="Tipo" size="md" variant="faded" value={type} onChange={(value) => setType(value)}>
          <Option value="CREDIT">Crédito</Option>
          <Option value="DEBT">Débito</Option>
          <Option value="BOTH">Crédito e Débito</Option>
        </Select> */}
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
            // postCredentials({
            //   title,
            //   name,
            //   number,
            //   cvv,
            //   expirationDate,
            //   password,
            //   isVirtual,
            //   type,
            // });
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
export default CardsForm;
