import {AiFillStar} from 'react-icons/ai'
import { useState } from 'react'
import s from './raiting.module.css'

function Raiting() {
    const [raiting, setRaiting] = useState(3)

    const handleChange = (ind) => {
        return () => setRaiting(ind)
    }
  
    const numberOfStars = 5
  
    const stars = new Array(numberOfStars).fill('').map((el, ind) => {
        return raiting >= ind + 1 ? 
            <AiFillStar key={ind} onClick={handleChange(ind + 1)} className={s.active} /> : 
            <AiFillStar key={ind} onClick={handleChange(ind +1)} />
    })
   

    return (
        <div className={s.container}>
            <div className={s.stars}>
                {stars}
            </div>
            <span className={s.comments}>
            5 отзывов
            </span>
        </div>
    )
}

export default Raiting