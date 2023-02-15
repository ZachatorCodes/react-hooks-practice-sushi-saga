import React from "react";

function Sushi({ sushi, onEatSushi }) {
  const { name, img_url, price, eaten } = sushi;

  function handleSushiClick() {
    if (!eaten) {
      onEatSushi(sushi);
    } else {
      alert("Plate is empty :(");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img src={img_url} alt={`${name} Sushi`} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
