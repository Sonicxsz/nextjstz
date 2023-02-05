import Link from 'next/link'
import s from './card.module.css'
import Image from 'next/image'
import Button from '../button/button'
import Price from '../price/Price'
import {AiOutlineHeart} from 'react-icons/ai'

function Card({id, price, img }) {
  
    return (
        <div className={s.container}>
            <Image src={img} alt={img} className={s.image} width={300} height={200} />
            <AiOutlineHeart className={s.icon}/>
            <div className={s.content}>
                <h2 className={s.title}>Диван</h2>
                <Price price={price}/>
                <Link href={`/goods/${id}`}><div className={s.btnWidn}><Button>Посмотреть</Button></div></Link>
            </div>
        </div>
    )
}

export default Card