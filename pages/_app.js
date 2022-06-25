import { StoreContextProvider } from '../mobX/StoreContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
    return (
        <StoreContextProvider>
            <Component {...pageProps} />
        </StoreContextProvider>
    )
}

export default MyApp