import { Box, VStack, Image, Skeleton, Text } from '@chakra-ui/react';
import { ListItem } from '../../utils/types';

interface DeviceCardProps {
  item: ListItem;
  onClickHandler: (id: string) => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ item, onClickHandler }) => {
  return (
    <Box
      w={'232px'}
      h={'193px'}
      border={'solid 1px'}
      borderColor={'neutral4'}
      borderRadius={'8px'}
      cursor={'pointer'}
      onClick={() => {
        onClickHandler(item.id);
      }}
    >
      <VStack gap={'0'}>
        <Box h={'124px'} w={'full'} bg={'neutral2'}>
          <Image
            bg={'transparent'}
            src={item.img}
            h={'124px'}
            w={'232px'}
            fallback={<Skeleton h={'124px'} w={'full'} />}
            objectFit='cover'
          />
        </Box>
        <VStack p={'12px'} w={'full'} alignItems={'flex-start'} gap={'0'}>
          <Text fontWeight={'700'} noOfLines={1}>
            {item.name}
          </Text>
          <Text fontSize={'12px'} lineHeight={'20px'} color={'text3'}>
            {item.productLine}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default DeviceCard;
