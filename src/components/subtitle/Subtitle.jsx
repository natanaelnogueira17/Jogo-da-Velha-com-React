import styles from '../subtitle/Subtitle.module.css'

function Subtitle ({children}){
  return(
    <h6 classname={styles.subtitle}>
      {children}
    </h6>
  )
}

export default Subtitle 