import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { Snippet } from "@nextui-org/snippet";
import { title } from "@/components/primitives";
import { listItem } from "@/types";

const CardList = ({ item }: { item: listItem }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex items-center gap-2 cursor-pointer" onClick={onOpen}>
        <p className={`${title({ color: "cyan", size: "small" })}`}>{item.title}</p>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className={`${title({ color: "blue", size: "sm" })} py-1`}>{item.title}</h1>
              </ModalHeader>
              <Divider />
              <ModalBody className="py-6">
                <h6 className={title({ color: "violet", size: "small" })}>URL</h6>
                <p>
                  <Snippet hideSymbol>{item.url}</Snippet>
                </p>
                <Divider />
                <h6 className={title({ color: "violet", size: "small" })}>USER</h6>
                <p>
                  <Snippet hideSymbol>{item.user}</Snippet>
                </p>
                <Divider />
                <h6 className={title({ color: "violet", size: "small" })}>SENHA</h6>
                <p>
                  <Snippet hideSymbol>{item.password}</Snippet>
                </p>
              </ModalBody>
              <Divider />
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Deletar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardList;
