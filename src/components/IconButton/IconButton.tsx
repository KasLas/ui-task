import React from 'react';
import gridView from '../../assets/gridView.svg';
import listView from '../../assets/listView.svg';

interface IconButtonProps {
  variant: 'list' | 'grid';
}

type IconsType = {
  list: string;
  grid: string;
};

const icons: IconsType = {
  list: listView,
  grid: gridView,
};

const IconButton: React.FC<IconButtonProps> = ({ variant }) => {
  return (
    <div>
      <img src={icons[variant as keyof IconsType]} alt="icon button" />
    </div>
  );
};

export default IconButton;
