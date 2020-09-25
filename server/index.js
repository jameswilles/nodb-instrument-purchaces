const express = require('express');
const { getPurchasedInstruments } = require('./controllers/controller');
const ctrl = require('./controllers/controller')

const app = express();

app.use(express.json());

//put endpoints here
app.get('/api/for-sale', ctrl.getForSale);
app.get('/api/purchased-instruments', ctrl.getPurchasedInstruments);
app.post('/api/purchased-instruments', ctrl.purchaseItem);
app.put('/api/purchased-instruments/:id', ctrl.editPrice);
app.delete('/api/purchased-instruments/:id', ctrl.sellItem);

const port = 4444;
app.listen(port, () => console.log(`Server listening on port ${port}`));