import React from 'react';
import SearchIcon from '../../assets/Search-icon.svg';
import * as S from './styles';

const Search = () => {
  return (
    <div>
      <S.Search>
        <S.SearchIconWrapper>
          <img src={SearchIcon} alt="search icon" />
        </S.SearchIconWrapper>
        <S.StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </S.Search>
    </div>
  );
};

export default Search;
