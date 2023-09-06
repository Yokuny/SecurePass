import { Modal, ModalContent, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { CloseIcon, ConfirmIcon } from "../../icons";
import DeleteModalBody from "./DeleteModalBody";

type DeleteProps = {
  onClose: () => void;
};

const DeleteButton = ({ onClose }: DeleteProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="default" variant="light" onClick={onOpen}>
        Deletar
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onConfirm) => (
            <>
              <DeleteModalBody />
              <ModalFooter>
                <Button color="danger" onPress={onConfirm}>
                  <CloseIcon />
                </Button>
                <Button
                  color="success"
                  onClick={() => {
                    // TODO: deletetar realmente o registro
                    onClose();
                  }}>
                  <ConfirmIcon className="text-white" />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default DeleteButton;
