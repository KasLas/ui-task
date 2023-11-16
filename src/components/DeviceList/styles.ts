import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const ItemWrapper = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 130px 250px 1fr;
  align-items: center;
  column-gap: 16px;
  border-bottom: solid 1px ${COLORS.defaultBorder};
  padding: 2px 0;
`;

export const ImgWrapper = styled.div`
  margin: 0 auto 0 auto;
`;

export const HoverContainer = styled.div`
  :hover {
    cursor: pointer;
    background: #fbfbfb;
  }
`;

export const BoldParagraph = styled.p`
  font-weight: 700;
`;
