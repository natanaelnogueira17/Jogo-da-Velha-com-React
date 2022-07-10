import styles from'./Header.module.css'
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from '../icons/Icon'


function Header (){
return(
  <div className= {styles.header}>
    <Title>Jogo da Velha </Title>
    <Subtitle>Criado por Natanael Nogueira</Subtitle>
    <div className={styles.iconsContent}>
    <Icon iconName="github" link="https://github.com/natanaelnogueira17">
    <br/>Github 
    </Icon>
    </div>
  </div>
)

}

export default Header