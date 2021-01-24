import dummyItems from './data/dummy-items';
import { List } from './components/List';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="sm">
      <List items={dummyItems} />
    </Container>
  );
}

export default App;
