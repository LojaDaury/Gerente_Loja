import Document, { Head, Html, Main, NextScript } from "next/document"
import React from "react";

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>   
         </Html>
      );
   }
}