import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';

export const List = ({ items }) => {
  const [clicksCount, setClickCount] = React.useState(0);
  const [clickedItemId, setClickedItemId] = React.useState('');

  React.useEffect(() => {
    if (clicksCount === 0) return;
    alert(
      `Kopējais klikšķu skaits ir ${clicksCount}. Clicked on item with id: ${clickedItemId}`
    );
  }, [clicksCount, clickedItemId]);

  return (
    <StyledIListContainer>
      <StyledHeading>List items should appear below</StyledHeading>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          clicksCount={clicksCount}
          setClickCount={setClickCount}
          setClickedItemId={setClickedItemId}
        />
      ))}
    </StyledIListContainer>
  );
};

const StyledIListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const StyledHeading = styled.h1`
  text-align: left;
`;
