import "./styles/css/styles.css";
import Header from "./modules/Header";
import Search from "./modules/Search";
import CountryList from "./modules/CountryList";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <CountryList />
    </div>
  );
}

export default App;
