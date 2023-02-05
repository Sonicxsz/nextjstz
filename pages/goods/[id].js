import Image from 'next/image';
import s from '../../styles/goods.module.css';
import ColorPick from '../../components/colorPick/ColorPick';
import Delevery from '../../components/delevery/Delevery';
import Price from '../../components/price/Price';
import Raiting from '../../components/raiting/Raiting';
import FillControll from '../../components/fillControll/FillControll';

function SingleGoods({ item }) {
    return (
        <div className={s.container}>
            <div className={s.imageContainer}>
                <Image className={s.image} alt={item.images[0].path} src={item.images[0].path} fill />
            </div>
            <div className={s.wrapper}>
                <div className={s.title}>
                    <h1>Финка</h1>
                    <h2>Диван Финка</h2>
                </div>
                <Raiting />
                <Price price={item.price} size="big" />
                <ColorPick />
                <FillControll />
                <Delevery />
                <button className={s.button}>В корзину</button>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3003/data');
    const data = await res.json();

    const paths = data.map((item) => ({
        params: { id: item.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await fetch(`http://localhost:3003/data/${id}`);
    const data = await res.json();

    return {
        props: { item: data },
    };
}

export default SingleGoods;
