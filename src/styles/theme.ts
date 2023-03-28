import { extendTheme } from '@chakra-ui/react';
import type { Theme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: '#18181B',
        color: '#FAFAFA',
      },
    },
  },
} as Theme | Record<string, unknown>);