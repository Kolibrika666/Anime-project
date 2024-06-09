import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import s from './Laout.module.scss'

function Laout() {
    return (
        <div className={s.laout}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default Laout;