import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, eatSushi}) {
  const [showSushi, showSetSushi] = useState(0)
  const sushiPlates = sushi
  .slice(showSushi, showSushi + 4)
  .map((nigiri) => (
        <Sushi key={nigiri.id} nigiri={nigiri} eatSushi={eatSushi}/>
      ))
  function clickMore() {
    showSetSushi((sushiIndex) => sushiIndex + 4 % sushi.length)
  }
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiPlates}
      {/* {sushi
      .slice(showSushi, showSushi + 4)
      .map((nigiri) => (
        <Sushi key={nigiri.id} nigiri={nigiri} eatSushi={eatSushi}/>
      ))} */}
      <MoreButton onClickMore={clickMore}/>
    </div>
  );
}

export default SushiContainer;
