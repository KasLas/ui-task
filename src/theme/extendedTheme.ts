import { extendTheme } from '@chakra-ui/react';
import { checkboxTheme } from './styledCheckBox';
import { popoverTheme } from './styledPopover';

export const extendedTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'rgba(0, 0, 0, 0.65)',
      },
    },
  },
  colors: {
    hover: '#FBFBFB',
    neutral0: '#FFF',
    neutral2: '#F6F6F8',
    neutral3: '#EDEDF0',
    neutral4: '#DBDCE1',
    neutral8: '#838691',
    text2: 'rgba(0, 0, 0, 0.65)',
    text3: 'rgba(0, 0, 0, 0.45)',
  },
  fonts: {
    body: 'Lato',
    heading: 'Lato',
  },
  components: {
    Checkbox: checkboxTheme,
    Popover: popoverTheme,
    Text: {
      baseStyle: {
        fontSize: '14px',
        lineHeight: '24px',
      },
    },
  },
});
