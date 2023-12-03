import { extendTheme } from '@chakra-ui/react';

export const extendedTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'rgba(0, 0, 0, 0.65)',
      },
    },
  },
  colors: {
    neutral0: '#FFF',
    neutral2: '#F6F6F8',
    neutral3: '#EDEDF0',
    neutral8: '#838691',
  },
});
