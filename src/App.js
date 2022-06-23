import "./App.css";
import Axios from "axios";
import react, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="coins">
      <div className="search"></div>
      <h1 className="text">Search crypto</h1>
      <form>
        <input type="text" placeholder="Search" className="input"></input>
      </form>
    </div>
  );
}

export default App;
