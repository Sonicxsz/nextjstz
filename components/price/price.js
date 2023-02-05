import s from './price.module.css'
import Discount from '../discount/discount'

function Price({price, size='small'}) {
    const clazz = size === 'small' ? s.price : `${s.price} ${s.L}`

    const priceFormatted = new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(price);

    return (
        <div className={s.priceWrapper}>
            <span className={clazz}>{priceFormatted} ₽</span>
            <span className={s.priceNonActive}>{priceFormatted} ₽</span>  
            <Discount size={size}>10</Discount>   
        </div>
    )
}

export default Price
