import { UseToastOptions } from '@chakra-ui/react';

type TStatus = 'info' | 'warning' | 'loading' | 'success' | 'error';

export function toastFactory(
  title: string,
  message: string,
  status: TStatus
): UseToastOptions {
  return {
    title: title,
    description: message,
    status: status,
    duration: 5000,
    isClosable: true,
    variant: 'solid',
    position: 'top-right',
  };
}
