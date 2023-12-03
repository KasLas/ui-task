import {
  useRadio,
  Box,
  chakra,
  Icon,
  HStack,
  useRadioGroup,
} from '@chakra-ui/react';
import GridIcon from '../Icons/GridIcon';
import GridIconActive from '../Icons/GridIconActive';
import ListIcon from '../Icons/ListIcon';
import ListIconActive from '../Icons/ListIconActive';

const CustomRadio = (props: any) => {
  const { icon, activeIcon, ...radioProps } = props;
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor='pointer'>
      <input {...getInputProps({})} hidden />
      <Box {...getRadioProps()}>
        <Icon as={state.isChecked ? activeIcon : icon} {...getLabelProps()} />
      </Box>
    </chakra.label>
  );
};

const icons = [
  { name: 'list', icon: ListIcon, activeIcon: ListIconActive },
  { name: 'grid', icon: GridIcon, activeIcon: GridIconActive },
];

const LayoutSwitch = ({
  layoutToggle,
}: {
  layoutToggle: (select: string) => void;
}) => {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'list',
    onChange: layoutToggle,
  });

  return (
    <HStack gap={4} {...getRootProps()}>
      {icons.map((icon) => {
        return (
          <CustomRadio
            key={icon.name}
            activeIcon={icon.activeIcon}
            icon={icon.icon}
            {...getRadioProps({ value: icon.name })}
          />
        );
      })}
    </HStack>
  );
};

export default LayoutSwitch;
