import { useState } from "react";

import GameOption from "../gameOption/GameOption";
import styles from './Game.module.css'
import Icon from '../icon/Icon'



function Game (){
  const [gameState, setGameState]=useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(1)
  


  const handleClick = (pos) =>{
    
    if(gameState[pos] === 0)   
    {
      let newGameState = [...gameState]
        newGameState[pos] = currentPlayer
        setCurrentPlayer(currentPlayer * -1)
        setGameState(newGameState)     
    }
    
    
  }

  return(
    <div className={styles.gameContent}>
          <div className={styles.game}>

              {
                gameState.map((value, pos)=>
                <GameOption
                key={`game-option-pos-${pos}`}
                status={value}
                onClick={() => handleClick(pos)}
                />
                )
              }   
            
            </div>

              <div className={styles.gameInfo}>
                  <h4>Próximo a jogar: </h4>
                 
                    {  
                      currentPlayer === 1 && <Icon iconName="circle" size="20px"/>
                    }
                    {
                      currentPlayer === -1 && <Icon iconName="x" size="20px" />
                    }
                  
              </div>
        
  </div> 

  )
}

export default Game