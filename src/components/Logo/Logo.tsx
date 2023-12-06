import { Icon, LinkBox, LinkOverlay, useBoolean } from '@chakra-ui/react';
import LogoDefault from '../Icons/LogoDefault';
import LogoHover from '../Icons/LogoHover';

const Logo = () => {
  const [flag, setFlag] = useBoolean();

  return (
    <LinkBox onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      <LinkOverlay href='/'>
        <Icon as={flag ? LogoHover : LogoDefault} />
      </LinkOverlay>
    </LinkBox>
  );
};

export default Logo;
