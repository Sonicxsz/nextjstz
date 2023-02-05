import Card from '../components/card/card';

export default function Home({data}) {
    return (
        <>
            {data.map((i, ind) =>{
                return <Card id={i.id} img={i.images[0].path} price={i.price} key={ind} />;
            } )}
        </>
    );
}


export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3003/data');
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data }
    };
}