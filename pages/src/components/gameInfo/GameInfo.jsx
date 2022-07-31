import style from './GameInfo.module.css'
import Icon from "../icon/Icon"
import Button from '../button/Button'

function GameInfo({currentPlayer, winner, onReset, isDraw}){

  const shouldEnableButton = () =>{
   if( winner !== 0) return true
   if (isDraw) return true
  }
  return(
    <div className={style.gameInfo}>
    {

    !isDraw && winner === 0 &&
        <>
              <h4>Próximo a jogar: </h4>
            {
              currentPlayer === -1 && <Icon iconName="x"  size="20px"/>
            }

            {
              currentPlayer === 1 && <Icon iconName="circle" size = "20px"/>
              }
        </>
    }
    {
      winner !== 0 &&
        <>
          <h4>Fim de jogo!</h4>
          <p> Campeão:</p>
            
              {
              winner === 1 && <Icon iconName="circle" />
              }
              {
              winner === -1 && <Icon iconName="x"  />
              }
                
        </>
    }
    {
      isDraw && <h4>Empate!</h4>


    }
            <Button 
            onClick={onReset}
            disabled = {!shouldEnableButton()}
            >
              Reiniciar Jogo
            </Button>
  </div>

  )
}

export default GameInfo