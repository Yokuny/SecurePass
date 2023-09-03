import { Modal, ModalContent, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { title } from "@/components/primitives";
import ItemModal from "./ItemModal";
import DeleteButton from "./DeleteButton";
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
              <ItemModal item={item} />
              <ModalFooter>
                <DeleteButton onClose={onClose} />
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
