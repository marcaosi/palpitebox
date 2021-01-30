import React from 'react'

import '../css/style.css'
// import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <h1 className="bg-green-400 md:bg-red-900 xl:bg-purple-800 p-8">My App</h1>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp