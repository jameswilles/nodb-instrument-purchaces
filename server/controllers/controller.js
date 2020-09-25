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

const purchasedInstruments = [
  {id: 1, name:'Keyboard', price: 500}
];
let newId = 2;


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
    //add an item to the purchasedInstruments array
    res.status(200).send(purchasedInstruments)
  },
  editPrice: (req, res) => {
    //edit the price of an object inside the purchasedInstruments array
    res.status(200).send(purchasedInstruments)
  },
  sellItem: (req, res) => {
    const {id} = req.params;
    //using the id param, find and remove an item from the purchasedInstruments array
    purchasedInstruments.splice(index, 1)
    res.status(200).send(purchasedInstruments)
  }

}