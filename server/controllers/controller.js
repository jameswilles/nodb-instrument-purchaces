const axios = require('axios');

const instruments = [
  {type:'Marimba One', price: 10000},
  {type:'Electric Guitar', price: 200},
  {type:'Acoustic Guitar', price: 300},
  {type:'Vibraphone', price: 5000},
  {type:'Ukulele', price: 50},
  {type:'Bongo', price: 70},
  {type:'Triangle', price: 15},
  {type:'Grand Piano', price: 12000},
  {type:'Steel Drum', price: 400},
  {type:'Xylophone', price: 2000}
]

const purchasedInstruments = [];
let newId = 1;


module.exports = {
  getForSale: (req, res) => {

    const forSale = []; 
    const rand1 = Math.ceil((Math.random() * 10) - 1);
    const rand2 = Math.ceil((Math.random() * 10) - 1);
    const rand3 = Math.ceil((Math.random() * 10) - 1);

    forSale.push(instruments[rand1]);
    forSale.push(instruments[rand2]);
    forSale.push(instruments[rand3]);

    res.status(200).send(forSale);
  },
  getPurchasedInstruments: (req, res) => {
    res.status(200).send(purchasedInstruments)
  },
  purchaseItem: (req, res) => {
    const { instrument } = req.body;

    instrument.id = newId;
    newId++

    purchasedInstruments.push(instrument)
    res.status(200).send(this.purchasedInstruments)
  },
  editPrice: (req, res) => {
    const {id} = req.params;
    const {price} = req.body;

    const instrument = purchasedInstruments.find(element => element.id === +id);
    instrument.price = price;
    res.status(200).send(purchasedInstruments)
  },
  sellItem: (req, res) => {
    const {id} = req.params;

    const index = purchasedInstruments.findIndex(element => element.id === +id)
    purchasedInstruments.splice(index, 1)
    res.status(200).send(purchasedInstruments)
  }

}