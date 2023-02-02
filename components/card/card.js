import styles from './card.module.css'
import Image from 'next/image'
import Button from '../button/button'
function Card() {
  return (
    <div className={styles.cardWrapper}>
        <Image style={{backgroundColor: '#ff8'}} width={400} height={200} />
        <h2>Диван</h2>
        <span>12900p</span>
        <Button />
    </div>
  )
}

export default Card