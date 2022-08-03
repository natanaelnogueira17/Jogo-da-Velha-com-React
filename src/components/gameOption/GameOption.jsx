import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({iconName})=><Icon iconName={iconName} size="15px"/>

function GameOption ({status, onClick}){
  return(
    <div className={styles.GameOption} onClick = {onClick}>
        {
          status === 1 && <GameIcon iconName="circle" />
          
        }
        {
          status === -1 && <GameIcon iconName="x" />
        }
      
    </div>
  )
}
export default GameOption