import '../styles/globals.css'
import type {AppProps} from 'next/app'
import App from "next/app";
import {NextPage} from "next";
import React, {ReactElement, ReactNode} from "react";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(<Component {...pageProps} />)
}

MyApp.getInitialProps = async (appContext: any) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return {...appProps};
};
export default MyApp
