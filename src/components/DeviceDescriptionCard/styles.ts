import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const DetailsLine = styled.div`
  padding: 4px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.defaultBorder};
`;
