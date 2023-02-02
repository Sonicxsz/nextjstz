import styles from '../styles/Home.module.css'
import Card from '../components/card/card'
const arr = [1,2,3,4,6,5]
export default function Home() {
  return (
    <div className={styles.container}>
        {arr.map((el, ind) => {
          return <Card />
        })}
    </div>
  )
}
