import React, {useState, useEffect} from 'react';
import {fetchEventi} from '../../../../api/index.js';
import { FaInfoCircle } from 'react-icons/fa';
import './style.css'

const Events = ({setSelectModal, setModal}) => {

    useEffect(() => {
        fetchItems();
    },[])
    
    const [events, setEvents] = useState([]);
    
    const fetchItems = async () => {
        let data = await fetchEventi();
        const e = data.data;
        setEvents(e);
    }

    const eventClick = (e) => {
        setSelectModal(e);
        setModal(true);
    }

    return (
        <div className="event__container bd-grid">
            {events.map((event, i) => (
                <div key={i} className="event">
                    <div className="event__data">
                        <div className="event__title">
                            <h4>{event.title}</h4>
                        </div>
                        <div className="event__info">
                            <span>{event.shortDescription}</span>
                        </div>
                        <div className="event__date">
                            <h5>{event.data}</h5>
                        </div>
                    </div>
                    <div className="event__link">
                        <div className="e__link" id={event._id}><FaInfoCircle onClick={()=>eventClick(event)}/></div>
                    </div>
                </div>
            ))}         
        </div>
    )
}

export default Events;