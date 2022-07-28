import style from './GameInfo.module.css'
import Icon from "../icon/Icon"

function GameInfo({currentPlayer, winner}){
  return(
    <div className={style.gameInfo}>
    {
winner === 0 &&
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
          <h4>Fim de jogo! Campeão: </h4>
              {
              winner === 1 && <Icon iconName="circle" />
              }
              {
              winner === -1 && <Icon iconName="x"  />
              }
        </>
    }
  </div>

  )
}

export default GameInfo