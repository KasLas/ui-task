import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import DeviceCard from '../DeviceCard';
import { ListItem } from '../../utils/types';

interface DeviceGridProps {
  gridData?: ListItem[];
}

const DeviceGrid: React.FC<DeviceGridProps> = ({ gridData }) => {
  const navigate = useNavigate();

  function handleCardClick(id: string) {
    navigate(`/device/${id}`);
  }

  return (
    <Flex gap={'24px'} flexWrap={'wrap'}>
      {gridData?.map((item) => {
        return (
          <DeviceCard
            key={item.id}
            item={item}
            onClickHandler={handleCardClick}
          />
        );
      })}
    </Flex>
  );
};

export default DeviceGrid;
