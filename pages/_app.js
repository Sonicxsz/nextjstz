import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
        
    return <layout className='container'><Component {...pageProps} /></layout>
}       
export default MyApp
