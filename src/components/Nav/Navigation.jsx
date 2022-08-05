import Icon from "../icon/Icon"
import styles from './Navigation.module.css'


function Navigation () {
  return(
    <>
    <nav >
             <div className={styles.icon}>             
              <Icon iconName="github" size="25px" link="https://github.com/natanaelnogueira17"/>       
             
              <Icon iconName="in5" size="25px" link="https://www.linkedin.com/in/natanael-nogueira-dev-fullstack-em-forma%C3%A7%C3%A3o-627824226/"/>           
             
              <Icon iconName="wp" size="25px" link="https://api.whatsapp.com/send/?phone=5585987977546&text&type=phone_number&app_absent=0"/>
              
              <div className={styles.react}>
                
              <Icon iconName="react" size="30px" link="https://pt-br.reactjs.org/docs/getting-started.html"/>            
              </div>

              </div>
             
              
    </nav>
    
             
    </>
   
  )
}

export default Navigation