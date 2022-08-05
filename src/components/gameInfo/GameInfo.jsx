import styles from './GameInfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo({currentPlayer, winner, clickReset, isDraw}){

  const shouldEnableButton = () => {
    if(winner !==0) return true
    if(isDraw) return true
  }
  return(
    <div className={styles.gameInfo}>

          <div>
          {
                !isDraw && winner === 0 &&
                  <>
                      <h4 className={styles.h4}>Proximo a jogar: </h4>
                          {
                            currentPlayer === 1 && <Icon iconName = "circle" size="20px"/> 
                          }    
                          {
                            currentPlayer === -1 && <Icon iconName="x" size = "20px"/>
                          }
                  </>
                  
              }
          </div>
          <div>
            {
              !isDraw && winner !== 0 &&          
                <>
                  <p className={styles.h4}> Fim de jogo!! <br/>O vencedor foi: </p>
                      {                
                      winner === -1  && <Icon iconName = "x" size="20px"/> 
                      }
                      {
                      winner === 1  && <Icon iconName = "circle" size="20px"/> 
                      }
                </>
                
            }
            {
                isDraw && <h4>Empate!</h4>
            }
          </div>
          <div>
          <Button 
          onClick={clickReset} 
          disabled ={!shouldEnableButton()}
          > 
          Reniciar Jogo</Button>
          </div>
                
    </div>
  )
}
export default GameInfo