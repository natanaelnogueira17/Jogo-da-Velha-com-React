import { useState } from "react"


import GameOptions from "../gameOptions/GameOptions"
import style from "./Game.module.css"



function Game (){
  const [gameState, setGameState] = useState(Array(9).fill(0))

  return(
    <div className={style.grid}>
      {
          gameState.map((value, pos)=><GameOptions 
          key ={`game-option-pos-${pos}`} 
          status={value}
          />)
      }


    </div>
  )
}

export default Game