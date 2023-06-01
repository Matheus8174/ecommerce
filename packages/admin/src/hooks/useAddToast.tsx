import React from 'react';

import { useToast, ToastId, UseToastOptions } from '@chakra-ui/react';

function useAddToast() {
  const toast = useToast();
  const toastIdRef = React.useRef<ToastId>();

  function addToast(options: UseToastOptions) {
    toastIdRef.current = toast({
      isClosable: true,
      variant: 'top-accent',
      ...options
    });
  }

  return {
    addToast
  };
}

export default useAddToast;
