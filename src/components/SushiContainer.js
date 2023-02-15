import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const renderedSushi = sushiList
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => {
      return <Sushi sushi={sushi} key={sushi.id} onEatSushi={onEatSushi}/>;
    });
  
  function handleClickMore() {
    setSushiIndex(sushiIndex => sushiIndex + 4);
  }

  return (
    <div className="belt">
      {renderedSushi}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
