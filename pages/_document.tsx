import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import React from "react";

React.useLayoutEffect = React.useEffect;

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="ANTD"/>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                    <link rel="icon" href="/favicon.ico"/>
                    <title>ANTD</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
