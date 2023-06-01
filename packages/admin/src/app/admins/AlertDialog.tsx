import React from 'react';

import {
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialog as ChakraAlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  ModalProps
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';

import useAddToast from '../../hooks/useAddToast';

type AlertDialogProp = {
  isOpen: boolean;
  onClose: () => void;
  handleAdminDelete: (email: string) => Promise<void>;
};

function AlertDialog({ isOpen, onClose, handleAdminDelete }: AlertDialogProp) {
  // const { addToast } = useAddToast();

  const cancelRef = React.useRef<ModalProps['initialFocusRef']>();

  return (
    <ChakraAlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Admin
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => handleAdminDelete()}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </ChakraAlertDialog>
  );
}

export default AlertDialog;
