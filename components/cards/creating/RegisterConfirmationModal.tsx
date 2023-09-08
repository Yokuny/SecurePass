import { Button, ModalFooter, ModalContent } from "@nextui-org/react";
import RegisterFormModalBody from "./RegisterFormModalBody";
import { ConfirmIcon } from "@/components/icons";
import { ModalProp } from "@/types";

const RegisterConfirmationModal = ({ onClose }: ModalProp) => {
  return (
    <ModalContent>
      {() => (
        <>
          <RegisterFormModalBody />
          <ModalFooter>
            <Button
              color="success"
              onClick={() => {
                window.location.reload();
                onClose();
              }}>
              <ConfirmIcon className="text-white" />
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};

export default RegisterConfirmationModal;
