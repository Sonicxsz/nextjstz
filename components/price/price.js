import styles from './price.module.css'
function Price() {
  return (
    <div className={styles.priceWrapper}>
        <span className={styles.price}>12900p</span>
        <span className={styles.priceNonActive}>12900p</span>      
        <div className={styles.sale}>-10%</div>
    </div>
  )
}

export default Price
