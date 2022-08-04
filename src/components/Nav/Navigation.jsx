import Icon from "../icon/Icon"
import styles from './Navigation.module.css'


function Navigation () {
  return(
    <nav className={styles.icon}>
            <div className={styles.iconContent}>
              <Icon iconName="github" size="25px" link="https://github.com/natanaelnogueira17"/>
            </div>
            <div className={styles.iconContent}>
              <Icon iconName="in5" size="25px" link="https://www.linkedin.com/in/natanael-nogueira-dev-fullstack-em-forma%C3%A7%C3%A3o-627824226/"/>
            </div>
            <div className={styles.iconContent}>
              <Icon iconName="wp" size="25px" link="https://api.whatsapp.com/send/?phone=5585987977546&text&type=phone_number&app_absent=0"/>
            </div>
        </nav>
  )
}

export default Navigation