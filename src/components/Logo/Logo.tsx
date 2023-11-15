import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoDefault from '../../assets/logodefault.svg';
import logoHover from '../../assets/Logohover.svg';
import * as S from './styles';

interface LogoProps {
  title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {
  const [logo, setLogo] = useState(logoDefault);

  const navigate = useNavigate();

  function handleMouseEnter() {
    setLogo(logoHover);
  }

  function handleMouseLeave() {
    setLogo(logoDefault);
  }

  function handleClick() {
    navigate('/');
  }

  return (
    <S.Container>
      <img
        src={logo}
        alt="logo"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <h2>{title}</h2>
    </S.Container>
  );
};

export default Logo;
