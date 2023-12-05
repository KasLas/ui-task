import { useNavigate } from 'react-router-dom';
import { VStack, Text, Grid, GridItem } from '@chakra-ui/react';
import { ListItem } from '../../utils/types';
import DeviceListItem from '../DeviceListItem';

interface ListDataProps {
  listData?: ListItem[];
}

const DeviceList: React.FC<ListDataProps> = ({ listData }) => {
  const navigate = useNavigate();

  function handleItemClick(id: string) {
    navigate(`/device/${id}`);
  }

  return (
    <VStack>
      <Grid gridTemplateColumns={'130px 250px 1fr'} gap={4} w={'full'}>
        <GridItem>
          <Text>{`${listData?.length} devices`}</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight={'700'}>PRODUCT LINE</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight={'700'}>NAME</Text>
        </GridItem>
      </Grid>
      {listData?.map((item) => {
        return (
          <DeviceListItem
            key={item.id}
            item={item}
            itemClickHandler={handleItemClick}
          />
        );
      })}
    </VStack>
  );
};

export default DeviceList;
