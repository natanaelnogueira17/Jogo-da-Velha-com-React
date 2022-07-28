import classNames from 'classnames'

import style from './GameOption.module.css'
import Icon from '../icon/Icon'

//opcional por conta do tamanho que repete
const GameIcon = ({iconName})=> <Icon iconName={iconName} size="15px"/> 

function GameOption({status,onClick, isWinner}){
  return(
    <div 
      className={
      classNames(style.gameoption,
      {[style.winner]: isWinner
      })
    } 
    onClick={onClick}
    >

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