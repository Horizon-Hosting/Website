import React from 'react'
import Document, {Head, Html, Main, NextScript} from 'next/document'


class MainDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>HRZN Hosting</title>
                </Head>
                <body className="bg-dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MainDocument