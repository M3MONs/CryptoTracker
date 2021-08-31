import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/Coin";
import {List, Search} from "./AppStyle"

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        alert("ERROR WITH FETCHING");
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const coinsList = filteredCoins.map((coin) => {
    return (
      <Coin
        key={coin.id}
        name={coin.name}
        image={coin.image}
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
      />
    );
  });

  return (
    <div className="crypto-app">
      <Search>
        <h2>Szukaj Kryptowaluty</h2>
        <form>
          <input
            type="text"
            placeholder="Wpisz nazwe"
            className="crpyto-input"
            onChange={handleChange}
          />
        </form>
      </Search>
      <List>{coinsList}</List>
    </div>
  );
}

export default App;
