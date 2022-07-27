import React from 'react'
import style from './Header.module.css'
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from "../icon/Icon"

function Header(){
  return(
    <div className={style.header}>

      <Title>Jogo da velha</Title>      
      <Subtitle>Criado por  Natanael Nogueira</Subtitle>
      <div className={style.iconcontent}>
        <Icon  iconName="github" link="https://github.com/natanaelnogueira17" size="30px"/>
      </div>
      
  

    </div>
  )
}

export default Header