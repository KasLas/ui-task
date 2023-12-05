import { HStack, Heading, Text } from '@chakra-ui/react';
import Logo from '../Logo';

function Header() {
  return (
    <HStack
      as='header'
      justifyContent={'space-between'}
      bg={'neutral2'}
      pr={'28px'}
    >
      <HStack gap={4}>
        <Logo />
        <Text
          fontSize={'20px'}
          lineHeight={'28px'}
          letterSpacing={'-0.5px'}
          color={'neutral8'}
        >
          Devices
        </Text>
      </HStack>
      <Text>Kaspars Lasinskis</Text>
    </HStack>
  );
}

export default Header;
