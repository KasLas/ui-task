import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { FilterOptions } from '../../utils/types';
import CheckedIcon from '../Icons/CheckedIcon';

interface SelectOptions {
  filterOptions: FilterOptions[];
}

const Select: React.FC<SelectOptions> = ({ filterOptions }) => {
  const [defaultValues, setDefaultValues] = useState(['']);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDefaultValues(searchParams.get('filter')?.split(',') || []);
  }, [location]);

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
        <PopoverHeader as={Text} padding={'12px 14px 12px 24px'}>
          Filter
        </PopoverHeader>
        <PopoverCloseButton />
        <VStack
          p={'0 24px 32px 23px'}
          mt={'20px'}
          gap={'20px'}
          w={'full'}
          alignItems={'flex-start'}
        >
          <Text fontWeight={'700'} color={'text1'}>
            Product line
          </Text>
          <CheckboxGroup
            value={defaultValues}
            onChange={(value: string[]) => {
              const currentSearchParams = Object.fromEntries([...searchParams]);
              setSearchParams({
                ...currentSearchParams,
                filter: String(value),
              });
            }}
          >
            <VStack alignItems={'flex-start'} w={'full'} gap={'0px'}>
              {filterOptions.map((option, i) => {
                return (
                  <Checkbox
                    id={`${i}`}
                    icon={<CheckedIcon />}
                    defaultChecked
                    size={'custom'}
                    pt={'4px'}
                    pb={'4px'}
                    colorScheme='blue'
                    key={option.name}
                    value={option.value}
                  >
                    {option.name}
                  </Checkbox>
                );
              })}
            </VStack>
          </CheckboxGroup>
        </VStack>
      </PopoverContent>
    </Popover>
  );
};

export default Select;
