import { useState, useEffect } from "react";
import GameInfo from "../gameInfo/GameInfo";
import GameOption from "../gameOption/GameOption";
import styles from './Game.module.css'


const winnerTable = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
 
]

function Game (){
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1) // inicio do jogo com o 1
  const [winner, setWinner] = useState(0) //verificar vencedor - iniciar com 0
  const [winnerLine, setWinnerLine] = useState([])
  const [draw, setDraw] = useState(false)
  


  const handleClick = (pos) =>{ // quando usuario clicar
    
    if(gameState[pos] === 0 && winner === 0)    //condicao
    {
      let newGameState = [...gameState]
        newGameState[pos] = currentPlayer  // criar um jogador atual 
       setGameState(newGameState)     
    }    
  }

  const verifyGame = () => {  //verifica o jogo, quam ganhou!
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos])
        const sum = values.reduce((sum, value) => sum + value)
        if(sum === 3  || sum === -3) {
          setWinner (sum /3) 
          setWinnerLine(line)
        }        
      })
    }

    const handleReset = () => {
      setGameState(Array(9).fill(0))
      setWinner(0)
      setWinnerLine([])
      setDraw(false)

    }
    const verifyDraw=()=>{
        if(gameState.find((value)=> value === 0) === undefined && winner ===0){
          setDraw(true)
        }
      }
    
   const verifyWinnerLine = (pos) =>
    winnerLine.find((value)=> value === pos) !== undefined

  useEffect(()=>{ 
    setCurrentPlayer(currentPlayer * -1) // ao refresh iniciar com jogador multiplicado por -1(se 1 vira -1 e vice versa)
    verifyGame()
    verifyDraw()
   },[gameState])

   useEffect(()=>{ 
        if(winner !== 0)setDraw(false)
   },[winner])

  return(
    <div className={styles.gameContent}>
          <div className={styles.game}>

              {
                gameState.map((value, pos)=> //passa pelo gamestate que é o array e pega o valor e posicao do click
                <GameOption //1ou -1
                key={`game-option-pos-${pos}`}
                status={value}
                onClick={() => handleClick(pos)}
                isWinner = { verifyWinnerLine(pos)}
                isDraw = {draw}
                />
                )
              }   
            
            </div>
            
            <GameInfo 
            currentPlayer ={currentPlayer} // mostrando prox jogador
            winner={winner}  // mostrando vencedor
            clickReset = {handleReset}
            isDraw = {draw}
            
            />           
        
      </div> 

  )
}

export default Game