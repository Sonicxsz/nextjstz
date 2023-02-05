import s from './discount.module.css'

function Discount({children, size='small'}) {
    const clazz = size === 'small' ? `${s.sale} ${s.S}` : `${s.sale} ${s.L}`
  
    return (
        <div className={clazz}>
            <div className={s.backGround}>
            -{children}%
            </div>
        </div>
    )
}

export default Discount