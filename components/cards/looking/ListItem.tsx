import { Modal, ModalContent, ModalFooter, Button, useDisclosure, Snippet } from "@nextui-org/react";
import ItemModal from "./ItemModal";
import DeleteButton from "./DeleteButton";
import { listItem } from "@/types";

const ListItem = ({ item, id }: { item: listItem; id: number }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex items-center gap-2 cursor-pointer" onClick={onOpen}>
        <Snippet symbol="#" radius="sm" variant="shadow" hideCopyButton>
          {id + 1}
        </Snippet>
        <Snippet symbol="" size="lg" radius="sm" color="primary" variant="solid" hideCopyButton>
          {item.title}
        </Snippet>
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
