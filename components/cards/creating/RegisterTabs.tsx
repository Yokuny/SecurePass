import { Tabs, Tab, CardBody } from "@nextui-org/react";
import { useState } from "react";
import CredentialsForm from "./CredentialsForm";
import CardsForm from "./CardsForm";
import { ModalProp } from "@/types";

const RegisterTabs = ({ onClose }: ModalProp) => {
  const [selected, setSelected] = useState("wifi");

  const handleTabSelectionChange = (key: string | number) => {
    setSelected(key as string);
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={handleTabSelectionChange}>
            <Tab key="credentials" title="Credenciais">
              <CredentialsForm onClose={onClose} />
            </Tab>
            <Tab key="cards" title="Cartões">
              <CardsForm onClose={onClose} />
            </Tab>
            <Tab key="notes" title="Notas">
              <CredentialsForm onClose={onClose} />
            </Tab>
            <Tab key="wifi" title="Wifi">
              <CredentialsForm onClose={onClose} />
            </Tab>
          </Tabs>
        </CardBody>
      </div>
    </>
  );
};

export default RegisterTabs;
