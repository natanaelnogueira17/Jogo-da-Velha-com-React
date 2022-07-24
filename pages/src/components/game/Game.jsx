import GameOptions from "../gameOptions/GameOptions"
import style from "./Game.module.css"


function Game (){
  return(
    <div className={style.grid}>
      <GameOptions/>
      <GameOptions/>
      <GameOptions/>
      <GameOptions/>
      <GameOptions/>
      <GameOptions/>
      <GameOptions/>
      <GameOptions/>
      <GameOptions/>


    </div>
  )
}

export default Game