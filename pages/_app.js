import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({Component, pageProps}) {
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
