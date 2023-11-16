import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* grid-template-rows: auto; */
  gap: 24px;
`;

export const ContentWrapper = styled.div`
  min-width: 235px;
  border-radius: 8px;
  border: solid 1px ${COLORS.darkBorder};
`;

export const ImgWrapper = styled.div`
  width: 100%;
  background: #f6f6f8;
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding: 12px;
`;
