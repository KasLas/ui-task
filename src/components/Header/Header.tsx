import Logo from '../Logo';
import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <Logo title="Devices" />
      <p>Kaspars Lasinskis</p>
    </S.Container>
  );
}

export default Header;
