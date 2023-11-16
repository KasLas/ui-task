import React from 'react';
import SearchIcon from '../../assets/Search-icon.svg';
import * as S from './styles';

interface SearchProps {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <div>
      <S.Search>
        <S.SearchIconWrapper>
          <img src={SearchIcon} alt="search icon" />
        </S.SearchIconWrapper>
        <S.StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={onChange}
        />
      </S.Search>
    </div>
  );
};

export default Search;
