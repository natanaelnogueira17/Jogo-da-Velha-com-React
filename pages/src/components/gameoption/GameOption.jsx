import style from './GameOption.module.css'
import Icon from '../icon/Icon'

//opcional por conta do tamanho que repete
const GameIcon = ({iconName})=> <Icon iconName={iconName} size="25px"/> 

function GameOption({status}){
  return(
    <div className={style.gameoption}>
      {
          status === 1 &&  <GameIcon iconName="circle" />       
      }

      { 
          status === -1 &&  <GameIcon iconName="x" />       
      }
      
    </div>
  )
}

export default GameOption