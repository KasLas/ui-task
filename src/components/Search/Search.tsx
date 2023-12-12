import React from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Icon,
  Box,
} from '@chakra-ui/react';
import SearchIcon from '../Icons/SearchIcon';
import CloseIcon from '../Icons/CloseIcon';

interface SearchProps {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onCloseClick: () => void;
  value: string;
}

const Search: React.FC<SearchProps> = ({ value, onChange, onCloseClick }) => {
  return (
    <InputGroup bg={'neutral2'} maxW={'318px'}>
      <InputLeftElement h={8}>
        <Icon as={SearchIcon} />
      </InputLeftElement>
      <Input
        id='search'
        value={value}
        onChange={onChange}
        h={8}
        placeholder='Search'
        border={'none'}
        _focusVisible={{ border: 'none' }}
      />
      <InputRightElement h={8}>
        <Box as={'button'} onClick={onCloseClick}>
          <Icon as={CloseIcon} />
        </Box>
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
