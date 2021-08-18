import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [money, setMoney] =useState(70)
  //sushi doesn't show up after clicking on it
  const eatenSushi = sushi.filter(nigiri => nigiri.eaten)

//money gets taken after clicking on sushi plate 
function eatSushi(eatenSushi) {
  if (money >= eatenSushi.price) {
    const updateSushi = sushi.map(nigiri => {
      if (nigiri.id === eatenSushi.id) return { ...nigiri, eaten: true}
      return nigiri
    })
    setSushi(updateSushi)
    setMoney((money) => money - eatenSushi.price)
  }
}

//fetch api data 
  useEffect(() => {
  fetch(API)
  .then(res => res.json())
  // .then(sushi => setsushi(sushi))
  .then(sushi => {
    const updateSushi = sushi.map(nigiri => {
      return { ...nigiri, eaten: false}
    });
    setSushi(updateSushi)
  })
}, [])

  return (
    <div className="app">
      <SushiContainer sushi={sushi} eatSushi={eatSushi}/>
      <Table money={money} plates={eatenSushi} />
    </div>
  );
}

export default App;
