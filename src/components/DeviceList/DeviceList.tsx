import { useNavigate } from 'react-router-dom';

import * as S from './styles';

type ListItem = {
  id: string;
  img: string;
  productLine: string;
  name: string;
};

interface ListDataProps {
  listData: ListItem[];
}

const DeviceList: React.FC<ListDataProps> = ({ listData }) => {
  const navigate = useNavigate();

  function handleItemClick(id: string) {
    navigate(`/device/${id}`);
  }

  return (
    <ul>
      {listData.map((item) => {
        return (
          <S.HoverContainer
            key={item.id}
            onClick={() => {
              handleItemClick(item.id);
            }}
          >
            <S.ItemWrapper>
              <S.ImgWrapper>
                <img src={item.img} alt="product picture" />
              </S.ImgWrapper>
              <p>{item.productLine}</p>
              <p>{item.name}</p>
            </S.ItemWrapper>
          </S.HoverContainer>
        );
      })}
    </ul>
  );
};

export default DeviceList;
