import styles from './GameInfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo({currentPlayer, winner, clickReset, disable}){
  return(
    <div className={styles.gameInfo}>

          <div>
          {
                winner === 0 &&
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
              winner !== 0 &&          
                <>
                  <h4 className={styles.h4}> Fim de jogo!! <br/>O vencedor foi: </h4>
                      {                
                      winner === -1  && <Icon iconName = "x" size="20px"/> 
                      }
                      {
                      winner === 1  && <Icon iconName = "circle" size="20px"/> 
                      }
                </>
                
            }
          </div>
          <div>
          <Button 
          onClick={clickReset} 
          disabled ={winner ===0}
          > 
          Reniciar Jogo</Button>
          </div>
                
    </div>
  )
}
export default GameInfo