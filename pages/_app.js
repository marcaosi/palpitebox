import React from 'react'

import '../css/style.css'

import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Header />
            <div className="container mx-auto">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp