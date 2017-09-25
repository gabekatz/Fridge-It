const Item = require('../../db/models/MessageBoard').FridgeItems; 

module.exports = {
  getAllItems: (req, res) => {
    Item.findAll({
      where: {fridgeId: req.params.fridgeId}
    })
    .then((data) => {
      res.send(data); 
    })
    .catch(err => {
      res.status(500).send(err); 
    });
  },
  addItem: (req, res) => {
    Item.create({
      name: req.body.name,
      quantity: req.body.quantity,
      type: req.body.type
    })
    .then((data) => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    }); 
  },
  updateItem: (req, res) => {
    Item.update({
      name: req.body.name,
      quantity: req.body.quantity,
      type: req.body.type
    },
    { where: {id: req.params.id} })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },
  deleteItem: (req, res) => {
    Item.destroy({
      where: {id: req.params.id}
    })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
}