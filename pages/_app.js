import '../styles/globals.scss'
import {Provider} from 'react-redux';
import store from '../store';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import Head from 'next/head'

let persiStore = persistStore(store);
export default function MyApp({Component, pageProps}) {
    return (
    <>
        <Head>
            <title>EComShop</title>
            <meta name="description" content="EComShop-online shopping for all your needs"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    <Provider store={store} >
        <PersistGate loading={null} persistor={persiStore}>
            <Component {...pageProps} />
        </PersistGate>

    </Provider>
    </>
    )
}
