import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <header className='header'>
                <h2>NextJS CRM</h2>
                <Link href="/add-customer">Add Customer</Link>
            </header>
            <div className='main'>
                {children}
            </div>
            <footer className='footer'>
                <a href='https://github.com/MohammadAliPk' target="_blank" rel='noreferrer'>Mohammad Ali</a> | CRM project &copy;
            </footer>
        </>
    );
};

export default Layout;