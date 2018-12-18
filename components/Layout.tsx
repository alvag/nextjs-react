import Head from 'next/head';
import React from 'react';

import { Navigation } from './Common';

const Layout = (props: any) => {
    return (
        <div>
            <Head>
                <title>Bitcoin App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
            </Head>

            <Navigation />

            {props.children}
        </div>
    );
};

export default Layout;
