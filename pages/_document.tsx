import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

// noinspection HtmlRequiredTitleElement
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
