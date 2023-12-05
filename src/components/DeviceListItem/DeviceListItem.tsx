import { Box, Grid, GridItem, Text, Image, Skeleton } from '@chakra-ui/react';
import { ListItem } from '../../utils/types';

interface DeviceListItemProps {
  item: ListItem;
  itemClickHandler: (id: string) => void;
}

const DeviceListItem: React.FC<DeviceListItemProps> = ({
  itemClickHandler,
  item,
}) => {
  return (
    <Box
      w={'full'}
      borderBottom={'solid 1px'}
      borderBottomColor={'neutral3'}
      cursor={'pointer'}
      _hover={{ bg: 'hover' }}
      key={item.id}
      onClick={() => {
        itemClickHandler(item.id);
      }}
    >
      <Grid gridTemplateColumns={'130px 250px 1fr'} gap={4}>
        <GridItem>
          <Image
            src={item.img}
            w={'25px'}
            h={'25px'}
            fallback={<Skeleton w={'25px'} h={'25px'} />}
            alt='product picture'
          />
        </GridItem>
        <GridItem>
          <Text>{item.productLine}</Text>
        </GridItem>
        <GridItem>
          <Text>{item.name}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DeviceListItem;
