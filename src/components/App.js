import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [walletBalance, setWalletBalance] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        const updatedSushiList = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushiList(updatedSushiList);
      });
  }, []);

  function handleEatSushi(eatenSushi) {
    if (walletBalance >= eatenSushi.price) {
      const updatedSushiList = sushiList.map((sushi) => {
        if (eatenSushi.id === sushi.id) {
          return { ...sushi, eaten: true };
        } else {
          return sushi;
        }
      });
      setSushiList(updatedSushiList);
      setWalletBalance((walletBalance) => walletBalance - eatenSushi.price);
    } else {
      alert("Not enough money :(");
    }
  }

  const eatenSushiList = sushiList.filter((sushi) => {
    return sushi.eaten;
  });

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} onEatSushi={handleEatSushi} />
      <Table walletBalance={walletBalance} plates={eatenSushiList}/>
    </div>
  );
}

export default App;
