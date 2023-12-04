import { useNavigate } from 'react-router-dom';
import { Box, VStack, Text, Grid, GridItem } from '@chakra-ui/react';

export type ListItem = {
  id: string;
  img: string;
  productLine: string;
  name: string;
};

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
          <Box
            w={'full'}
            borderBottom={'solid 1px'}
            borderBottomColor={'neutral3'}
            cursor={'pointer'}
            _hover={{ bg: 'hover' }}
            key={item.id}
            onClick={() => {
              handleItemClick(item.id);
            }}
          >
            <Grid gridTemplateColumns={'130px 250px 1fr'} gap={4}>
              <GridItem>
                <img src={item.img} alt='product picture' />
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
      })}
    </VStack>
  );
};

export default DeviceList;
