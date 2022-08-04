import Header from '../header/Header'
import Game from '../game/Game'
import Navigation from '../Nav/Navigation'


function GamePage(){
  return(

<>
  <div>
    <Navigation></Navigation>
  </div>  
  <div className="container">
      <Header></Header>
      <Game></Game>
  </div>
</>  
     
  

  )
}
export default GamePage