import axios from "axios";
import { Modal, ModalContent, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { CloseIcon, ConfirmIcon } from "../../icons";
import DeleteModalBody from "./DeleteModalBody";
import { DeleteProps } from "@/types";
import { bearerToken } from "@/utils/bearerToken";

const DeleteButton = ({ onClose, itemReference, requestString }: DeleteProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const removeItem = async () => {
    try {
      await axios.delete(`${requestString}/${itemReference}`, bearerToken);
    } catch (err) {
      alert("err");
    } finally {
      onClose();
      const route = window.location.pathname;
      window.location.href = route;
    }
  };

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
                <Button color="primary" onPress={onConfirm}>
                  <CloseIcon />
                </Button>
                <Button
                  color="success"
                  onClick={() => {
                    removeItem();
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
