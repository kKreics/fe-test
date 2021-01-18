import './App.css';
import dummyItems from './data/dummy-items';
import List from './components/list';

function App() {
  return (
    <div className="App">
      <List items={dummyItems} />
    </div>
  );
}

export default App;
