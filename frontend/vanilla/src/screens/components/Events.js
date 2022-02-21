const Events = {
    render: async () => {
        const response = await fetch('http://192.168.178.24:3000/api/home/events',{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok) return `<div>Errore nel carricare i testi</div>`; 
        const events = await response.json();
        
        return `
        <div class="event__container bd-grid">
            ${events.map((event) => `
                <div class="event">
                    <div class="event__data">
                        <div class="event__title">
                            <h4>${event.title}</h4>
                        </div>
                        <div class="event__info">
                            <span>${event.shortDescription}</span>
                        </div>
                        <div class="event__date">
                            <h5>${event.data}</h5>
                        </div>
                    </div>
                    <div class="event__link">
                        <a class="e__link" id="${event._id}"><i class="bx bx-info-circle"></i></a>
                    </div>
                </div>
            `).join('\n')}           
        </div>
        `
    },
    render_event: async (btnId) => {
        const response = await fetch('http://192.168.178.24:3000/api/home/events',{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok) return `<div>Errore nel carricare i testi</div>`; 
        const events = await response.json();

        return `
        <div class="modal__title">${events[btnId].title}</div>
        <div class="modal__date">${events[btnId].data}</div>
        <div class="modal__description">${events[btnId].description}</div>
        `
    }
}
export default Events;