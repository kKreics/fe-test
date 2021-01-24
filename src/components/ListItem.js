import React from 'react';
import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

export const ListItem = ({
  item,
  clicksCount,
  setClickCount,
  setClickedItemId,
}) => {
  const handleButtonClick = () => {
    setClickCount(clicksCount + 1);
    setClickedItemId(item.id);
  };

  return (
    <StyledItemContainer>
      <span>{item.name}</span>
      <StyledMaterialButton
        id={item.id}
        role="button"
        color="secondary"
        variant="outlined"
        onClick={handleButtonClick}
      >
        Click Me
      </StyledMaterialButton>
    </StyledItemContainer>
  );
};

const StyledItemContainer = styled.div`
  display: flex;
  background-color: rgb(239, 242, 243);
  margin-bottom: 15px;
  padding: 15px;
  justify-content: space-between;
  span {
    line-height: 2;
    text-transform: uppercase;
  }
  :hover {
    background-color: pink;
    box-shadow: 0 10px 6px -6px #777;
  }
  transition: box-shadow 0.5s ease-in-out;
`;

const StyledMaterialButton = styled(MaterialButton)`
  :hover {
    box-shadow: 0 10px 6px -6px #777;
  }
  transition: box-shadow 0.5s ease-in-out;
  transition-delay: 0.3s;
`;
