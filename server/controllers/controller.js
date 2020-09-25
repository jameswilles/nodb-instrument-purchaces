const instruments = [
  {name:'Marimba One', price: 10000},
  {name:'Electric Guitar', price: 200},
  {name:'Acoustic Guitar', price: 300},
  {name:'Vibraphone', price: 5000},
  {name:'Ukulele', price: 50},
  {name:'Bongo', price: 70},
  {name:'Triangle', price: 15},
  {name:'Grand Piano', price: 12000},
  {name:'Steel Drum', price: 400},
  {name:'Xylophone', price: 2000}
]

const purchasedInstruments = [];
let newId = 1;


module.exports = {
  getForSale: (req, res) => {
    const forSale = [];

    const rand1 = Math.ceil((Math.random() * 10)-1);
    const rand2 = Math.ceil((Math.random() * 10)-1);
    const rand3 = Math.ceil((Math.random() * 10)-1);

    forSale.push(instruments[rand1]);
    forSale.push(instruments[rand2]);
    forSale.push(instruments[rand3]);
    res.status(200).send(forSale)
  },
  getPurchasedInstruments: (req, res) => {
    res.status(200).send(purchasedInstruments)
  },
  purchaseItem: (req, res) => {
    const { name } = req.body;

    name.id = newId;
    newId++

    purchasedInstruments.push(name)
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