import express from 'express';
import bodyParser from 'body-parser';
import {getRandomCoordinate, getDistance} from './apiFunction';

const app = express();

const PORT = 3232;
app.use(bodyParser.json());

app.use((_, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});

app.get('/api/orders', getRandomCoordinate);
app.get('/api/orders/Customer/:value',getDistance);

app.listen(PORT);
console.log('Listening on port', PORT);