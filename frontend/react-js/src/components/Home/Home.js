import React, { useState, useEffect } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import './style.css'

const Home = () => {

    window.onload = () => {
        // Logica per visualizzare il link selezionato
        const section = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            
            section.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50
                let sectionId = current.getAttribute('id')

                if(window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
                }else{
                    document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
                }
            })
        });
    }
    const [darkmode, setDarkmode] = useState(false);

    useEffect(() => {
        if(darkmode)
            document.body.classList.add('darkmode')
        else
            document.body.classList.remove('darkmode')
    },[darkmode])

    const changeDarkmode = () => setDarkmode(!darkmode);

    return (
        <>
            <Header changeDarkmode={changeDarkmode}/>
            <Main darkmode={darkmode}/>
            <Footer/>
        </>
    )
}

export default Home;