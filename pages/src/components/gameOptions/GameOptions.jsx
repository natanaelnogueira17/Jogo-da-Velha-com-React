import style from "./GameOptions.module.css"
import Icon from "../icon/Icon"

const GameIcon = ({iconName}) => <Icon iconName={iconName} size="25px"/>

function GameOptions({status}){
  return(
    <div className={style.gameOptions}>
        
       {
        status === 1 && <Icon iconName="circle" />
       }

{
        status === -1 && <Icon iconName="x" />
       }
    </div>
  )
}

export default GameOptions