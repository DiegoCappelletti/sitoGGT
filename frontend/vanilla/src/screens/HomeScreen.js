import Events from './components/Events.js'

const HomeScreen = {
    render_header: async() =>{
        const response = await fetch('http://localhost:3000/api/home/texts',{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok) return `<div>Errore nel carricare i titoli</div>`; 
        const header = await response.json();
        return `
            <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
            ${header.map((a) => `
            <li class="nav__item"><a href="#${a.id}" class="nav__link">${a.header}</a></li>
            `).join('')}
            <li class="nav__item"><a href="#eventi" class="nav__link">Eventi futuri</a></li>
        `
    },
    render_main: async () => {
        var response = await fetch('http://localhost:3000/api/home/texts',{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok) return `<div>Errore nel carricare i testi</div>`; 
        const main = await response.json();
        
        response = await fetch('http://192.168.178.24:3000/api/home/info',{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok) return `<div>Errore nel carricare le informazioni</div>`; 
        const info = await response.json();

        response = await fetch('http://192.168.178.24:3000/api/home/direttivo',{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok) return `<div>Errore nel carricare le informazioni del direttivo</div>`;
        const direttivo = await response.json();

        const d = new Date()
        return `
        <section class="home" id="home">
            <div class="home__container bd-grid">
                <div class="home__data">
                    <div class="home__img">
                        <img src="./logo.svg" alt="GGT">
                    </div>
                    <h1 class="home__title">Gruppo Giovani di Terlago</h1>
                    <span class="home_subtitle">Associazione giovanile</span>
                </div>
            </div>
        </section>
        ${main.map((s) => {
            if(s.id === "nascita"){
                return `
                <section class="section" id="${s.id}">
                    <span class="section-subtitle">${s.subtitle}</span>
                    <h2 class="section-title">${s.title}</h2>
                    <div class="text__container">
                        <div class="text__data">
                            <p class="text__description">${s.description}</p>
                        </div>
                    </div>
                    <div class="information">
                        <h3 class="information-title">Informazioni</h3>
                        <div class="information-data">
                            <i class='bx bx-mail-send information-icon'></i>
                            <span><a href="mailto://${info[0].email}">${info[0].email}</a></span>
                        </div>
                        <div class="information-data">
                            <i class='bx bx-home information-icon'></i>
                            <span>${info[0].sede}</span>
                        </div>
                    </div>
                </section>
                `
            }else if(s.id === "fare"){
                return `
                <section class="section" id="${s.id}">
                    <span class="section-subtitle">${s.subtitle}</span>
                    <h2 class="section-title">${s.title}</h2>
                    <div class="text__container bd-grid">
                        <p class="text__description">${s.description}</p>
                    </div>
                    <div class="information">
                        <h3 class="information-title">Direttivo</h3>
                        <div class="information-data">
                            <div class="dir__nome">
                            ${direttivo.map((d) => `
                                    <span>${d.nome} ${d.cognome}</span>
                            `).join('')}
                            </div>
                            <div class="dir__ruolo">
                            ${direttivo.map((d) => `
                                    <span>${d.ruolo}</span>
                            `).join('')}
                            </div>
                        </div>
                    </div>
                </section>
                `
            }else{
                return`
                <section class="section" id="${s.id}">
                    <span class="section-subtitle">${s.subtitle}</span>
                    <h2 class="section-title">${s.title}</h2>
                    <div class="text__container bd-grid">
                        <p class="text__description">${s.description}</p>
                    </div>
                </section>
                `
            }
        }).join('')}
        <section class="events section" id="eventi">
            <h2 class="section-title">Eventi futuri</h2>
            <span class="section-subtitle">Oggi: ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}</span>
            ${await Events.render()}
        </section>
        <div class="modal">
            <div class="modal__container">
                <div class="modal__close">
                    <i class="bx bx-x"></i>
                </div>
                <div class="modal__text"></div>
            </div>
        </div>
        `
    }
}
export default HomeScreen;