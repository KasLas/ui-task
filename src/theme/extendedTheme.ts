import { extendTheme, createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderRadius: 4,
  },
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });

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
  components: { Checkbox: checkboxTheme },
});
