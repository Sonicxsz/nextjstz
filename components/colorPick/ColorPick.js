import { useState, memo } from 'react'
import s from './colorPick.module.css'

function ColorPick () {
    const [colorActive, setColorActive] = useState({name:'Велюр Нелла 089',color:'#b38e3e'})

    const handleChangeColor = (color) => {
        return () => setColorActive(color)
    }

    const elements = palette.map((item, ind) => {
        const clazz = colorActive.color === item.color ? `${s.color} ${s.active}` : s.color;

        return <div key={ind} className={s.box}>
            <div onClick={handleChangeColor(item)} 
                className={clazz} 
                style={{backgroundColor: item.color}}></div>
        </div>
    })

    return (<div className={s.container}>
        <h2>{colorActive.name}</h2>
        <div className={s.wrapper}>
            {elements}
        </div>
    </div>
    )
}

const palette = [
    {name:'Велюр Нелла 001',color:'#7e8890'},
    {name:'Челябинск Нелла 089',color:'#525359'},
    {name:'Велюр Велюр 003',color:'#72696c'},
    {name:'Велюр Нелла 089',color:'#b38e3e'},
    {name:'Человек Паук 3',color:'#524443'},
    {name:'Велюр Нелла 100',color:'#185e76'},
    {name:'Велюр Нелла 101',color:'#8a505c'}
]

export default ColorPick