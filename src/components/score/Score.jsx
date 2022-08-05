import styles from './Score.module.css'
import Icon from '../icon/Icon'

function Score ({scoreX, scoreCircle}) {
  return(
      <>
        <div className={styles.scoreGeral}>
          <p>Placar: </p>
          <div className={styles.score}>
            <div className={styles.scoreContent}>
              <Icon iconName="x" size="20"/> <p> = </p>
              <p>{scoreX}</p>
            </div>
            <div className={styles.scoreContent}>
            <Icon iconName="circle" size="20"/> <p> = </p>
            <p>{scoreCircle} </p>
            </div>
          </div>
        </div>
      </>
  )
}

export default Score