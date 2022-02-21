import experess from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

import postRouter from './routes/home.js'

const app = experess();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/api/home', postRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}.`);
});