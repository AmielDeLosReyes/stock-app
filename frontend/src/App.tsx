import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';


function App() {
  return (
    <div className="App">
      <Search />
      <CardList companies={[]} />
    </div>
  );
}

export default App;
