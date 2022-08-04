import Subtitle from '../subtitle/Subtitle'
import Title from '../Title/Title'
import styles from '../header/Header.module.css'


function Header (){
  return(
<div className={styles.header}>
    <Title>
      Jogo da Velha
    </Title>  
    <Subtitle>
      Criado por Natanael Nogueira
    </Subtitle> 
        
</div> 



  )
}

export default Header