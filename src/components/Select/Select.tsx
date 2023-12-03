import React from 'react';
import { Text } from '@chakra-ui/react';

import { FilterOptions } from '../../utils/types';

interface SelectOptions {
  filterOptions: FilterOptions[];
  onChange: (event: any) => void;
  value: string;
}

const Select: React.FC<SelectOptions> = () => {
  return <Text>Multi select</Text>;
};

export default Select;
