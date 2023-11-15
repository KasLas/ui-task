import IconButton from '../IconButton';
import * as S from './styles';
import Search from '../Search';
import Select from '../Select';

const ToolBar = () => {
  return (
    <S.ToolBarWrapper>
      <Search />
      <S.Right>
        <IconButton variant="grid" />
        <IconButton variant="list" />
        <Select />
      </S.Right>
    </S.ToolBarWrapper>
  );
};

export default ToolBar;
