import React from 'react';
import Head from 'next/head'
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no,
                initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>PatternBOT</title>
            
        </Head>
    )
}