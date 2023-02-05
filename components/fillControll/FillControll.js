import s from './fill.module.css'
import Button from '../button/button'
const variables = ['НПБ', 'ППУ', 'ЗМЕЙКА', 'ПБ']

function FillControll() {

    return (
        <div className={s.container}>
            <h2>Выбрать наполнение:</h2>
            <div className={s.btnWrapper}>
                {variables.map((el, ind) => {
                    return <Button key={ind}><span className={s.title}>{el}</span></Button>
                })}
            </div>
        </div>
    )
}

export default FillControll