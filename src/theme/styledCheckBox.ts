import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const sizes = {
  custom: definePartsStyle({
    label: defineStyle({
      fontSize: '14px',
    }),
    control: defineStyle({
      boxSize: '16px',
      borderRadius: 4,
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({ sizes });
