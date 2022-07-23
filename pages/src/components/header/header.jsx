import style from './Header.module.css'
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"

function Header(){
  return(
    <div className={style.header}>

      <Title>Jogo da velha</Title>      
      <Subtitle>Criado por  Natanael Nogueira</Subtitle>
  

    </div>
  )
}

export default Header