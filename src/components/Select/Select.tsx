import React from 'react';
import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  CheckboxGroup,
  VStack,
  Checkbox,
  PopoverCloseButton,
  PopoverHeader,
  Box,
} from '@chakra-ui/react';
import { FilterOptions } from '../../utils/types';

interface SelectOptions {
  filterOptions: FilterOptions[];
  onChange: (event: any) => void;
  value: string;
}

const Select: React.FC<SelectOptions> = ({ filterOptions, onChange }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Text cursor={'pointer'}>Filter</Text>
      </PopoverTrigger>
      <PopoverContent
        bg={'neutral0'}
        mt={'-44px'}
        w={'256px'}
        borderRadius={'0px'}
        border={'none'}
        boxShadow={' 0px 12px 48px 0px rgba(0, 0, 0, 0.15)'}
        _focusVisible={{ outline: 'none' }}
      >
        <PopoverHeader padding={'12px 14px 12px 24px'}>Filter</PopoverHeader>
        <PopoverCloseButton />
        <CheckboxGroup colorScheme='green' onChange={onChange}>
          <Box p={'20px'}>
            <VStack alignItems={'flex-start'} gap={4}>
              {filterOptions.map((option) => {
                return (
                  <Checkbox
                    colorScheme='blue'
                    key={option.name}
                    value={option.value}
                  >
                    {option.name}
                  </Checkbox>
                );
              })}
            </VStack>
          </Box>
        </CheckboxGroup>
      </PopoverContent>
    </Popover>
  );
};

export default Select;
