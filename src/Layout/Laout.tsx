import React from 'react';
import Footer from './Footer/Footer';
import s from './Laout.module.scss'
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

function Laout() {
    return (
        <div className={s.laout}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>



    );
}

export default Laout;