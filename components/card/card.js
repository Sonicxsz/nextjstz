import styles from './card.module.css'
import Image from 'next/image'
import Button from '../button/button'
import Price from '../price/price'
import {AiOutlineHeart} from 'react-icons/ai'
function Card() {
  return (
    <div className={styles.container}>
        <Image className={styles.image} style={{backgroundColor: '#e4dfe8'}} width={300} height={200} />
        <AiOutlineHeart className={styles.icon}/>
        <div className={styles.content}>
          <h2 className={styles.title}>Диван</h2>
          <Price/>
          <Button />
        </div>
    </div>
  )
}

export default Card