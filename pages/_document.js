import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Oscar Delta</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Asap&display=swap" rel="stylesheet"/>                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}