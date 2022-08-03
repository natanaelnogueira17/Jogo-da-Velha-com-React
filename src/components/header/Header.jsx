import Subtitle from '../subtitle/Subtitle'
import Title from '../Title/Title'
import styles from '../header/Header.module.css'
import Icon from '../icon/Icon'

function Header (){
  return(
<div className={styles.header}>
    <Title>
      Jogo da Velha
    </Title>  
    <Subtitle>
      Criado por Natanael Nogueira
    </Subtitle> 
    <div className={styles.iconContent}>
      <Icon iconName="github" size="25px" link="https://github.com/natanaelnogueira17"/>
    </div>
</div> 


  )
}

export default Header