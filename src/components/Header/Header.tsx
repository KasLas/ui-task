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
        <Heading color={'neutral8'}>Devices</Heading>
      </HStack>
      <Text>Kaspars Lasinskis</Text>
    </HStack>
  );
}

export default Header;
