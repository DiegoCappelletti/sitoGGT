import HomeScreen from './screens/HomeScreen.js'
import Events from './screens/components/Events.js'

const event = () => {

    // Logica per mostrate e chiudere la navbar
    const navMenu = document.getElementById('nav-menu'),
        toggleMenu = document.getElementById('nav-toggle'),
        closeMenu = document.getElementById('nav-close');
    
        //SHOW
    toggleMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    })
        //HIDDEN
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })

        //REMOVE MENU
    const navLink = document.querySelectorAll('.nav__link'); 

    function linkAcrivation(){
        navMenu.classList.remove('show');
    }
    navLink.forEach(n => n.addEventListener('click', linkAcrivation));

    // Logica per visualizzare il link selezionato
    const section = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        section.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50
            let sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
            }else{
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
            }
        })
    });

    //Logica dei modal
    const modalBtn = document.querySelectorAll('.e__link'),
        modal = document.querySelector('.modal'),
        closeModal = document.querySelector('.modal__close'),
        modal_text = document.querySelector('.modal__text');

    modalBtn.forEach(m => m.addEventListener('click', async() => {
        modal.classList.add("modal__active");
        const btnId = m.getAttribute("id");
        modal_text.innerHTML = await Events.render_event(btnId-1);
    }));  

    closeModal.addEventListener('click', () => {
        modal.classList.remove("modal__active");
    });
    
}

const render = async () => {
    // Creo la navbar con i relativi link e attivo al primo elemento 
    const nav = document.querySelector('.nav__list');
    nav.innerHTML = await HomeScreen.render_header()

    // Creo il main con le relative sezioni 
    const main = document.querySelector('.l-main');
    main.innerHTML = await HomeScreen.render_main();

    event();
}

window.addEventListener('load', render);