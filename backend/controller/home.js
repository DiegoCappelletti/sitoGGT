import data from '../data.js';

export const getInfo = (req, res) => {
    res.send(data.informazioni);
}

export const geDirettivo = (req, res) => {
    res.send(data.direttivo);
}

export const getText = (req, res) => {
    res.send(data.texts);
}

export const getEvents = (req, res) => {
    res.send(data.events);
}