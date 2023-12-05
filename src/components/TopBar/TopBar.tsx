import React from 'react';
import { Box, Icon, Text, HStack } from '@chakra-ui/react';
import ChevronIcon from '../Icons/ChevronIcon';

interface TopBarProps {
  title: string;
  backClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ title, backClick }) => {
  return (
    <HStack
      p={'0 0 0 30px'}
      borderBottom={'solid 1px'}
      borderBottomColor={'neutral3'}
    >
      <Box as={'button'} cursor={'pointer'} onClick={backClick}>
        <Icon as={ChevronIcon} />
      </Box>
      <Text m={' 0 auto 0 auto'} lineHeight={'44px'}>
        {title}
      </Text>
    </HStack>
  );
};

export default TopBar;
