import styles from './Score.module.css'
import Icon from '../icon/Icon'

function Score () {
  return(
      <>
        <div className={styles.scoreGeral}>
          <p>Placar: </p>
          <div className={styles.score}>
            <div className={styles.scoreContent}>
              <Icon iconName="x" size="20"/> <p> = </p>
              <p>0</p>
            </div>
            <div className={styles.scoreContent}>
            <Icon iconName="circle" size="20"/> <p> = </p>
            <p>0 </p>
            </div>
          </div>
        </div>
      </>
  )
}

export default Score