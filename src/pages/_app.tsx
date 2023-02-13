import '@/styles/globals.css';
import theme from '@/theme.chakra';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
