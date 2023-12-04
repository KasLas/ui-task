import { popoverAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(popoverAnatomy.keys);
const baseStyle = definePartsStyle({
  closeButton: {
    transform: 'translateY(8px)',
  },
});
export const popoverTheme = defineMultiStyleConfig({ baseStyle });
