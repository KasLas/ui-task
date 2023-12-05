import React from 'react';
import { useSearchParams } from 'react-router-dom';
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
}

const Select: React.FC<SelectOptions> = ({ filterOptions }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValues = searchParams.get('filter')?.split(',');

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
        <CheckboxGroup
          defaultValue={defaultValues ? defaultValues : undefined}
          onChange={(value: string[]) => {
            const currentSearchParams = Object.fromEntries([...searchParams]);
            setSearchParams({ ...currentSearchParams, filter: String(value) });
          }}
        >
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
