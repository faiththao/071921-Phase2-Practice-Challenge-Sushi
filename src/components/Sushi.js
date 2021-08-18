import React from "react";

function Sushi({nigiri, eatSushi}) {
  const {name, img_url, price, eaten} = nigiri

  function clickSushi() {
    !eaten ? eatSushi(nigiri) : alert("No sushi on that plate.")
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={clickSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
