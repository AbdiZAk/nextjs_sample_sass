// next imports
import Head from 'next/head';

// react imports
import React from 'react';
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Ist 363 Restaurants</title>
                <meta name='description' content='This is discription about our project'/>
            </Head>
            <Header />
                {children}
            <Footer />
        </>

        
    );
}

export default Layout;
