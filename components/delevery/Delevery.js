import s from './delevery.module.css'


function Delevery() {
    return (
        <div className={s.container}>
            <h2>Доставка</h2>
            <div className={s.wrapper}>
                <h3>по Челябинску</h3>
                <span>700 ₽</span>
            </div>
            <div className={s.wrapper}>
                <h3>по России</h3>
                <span>от 1000 ₽</span>
            </div>
            <div className={s.wrapper}>
                <h3>Самовывоз</h3>
                <span>Бесплатно</span>
            </div>
        </div>
    )
}

export default Delevery