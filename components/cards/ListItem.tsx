import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { title } from "@/components/primitives";
import ItemModal from "./ItemModal";
import { listItem } from "@/types";

const ListItem = ({ item }: { item: listItem }) => {
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

              <ItemModal item={item} />

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

export default ListItem;
