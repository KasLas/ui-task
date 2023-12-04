import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderRadius: 4,
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
