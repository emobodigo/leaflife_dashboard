import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const colors = {
  customBlue: '#a9e5f8',
  customGreen: '#dff4ce',
  customBlack: '#323130',
  customYellow: '#fff1d8',
  customWhite: 'f5f6f7',
};

const theme = extendTheme({
  config,
  fonts: {
    body: `'Outfit', sans-serif`,
  },
});

export default theme;
