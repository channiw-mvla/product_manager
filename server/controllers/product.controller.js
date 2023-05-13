const Product = require('../models/product.model');    /* this is new */
module.exports = {
    findAllProducts : (req, res) => {
        Product.find()
            .then((allProducts) =>  res.json({ Products: allProducts }))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    }, 
     
    findOneProduct : (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneProduct =>  res.json({ Product: oneProduct }))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
     
    createNewProduct : (req, res) => {
        Product.create(req.body)
            .then(newProduct =>res.json({ Product: newProduct }))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
    updateExistingProduct : (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => res.json({ Product: updatedProduct }))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
    deleteAnExistingProduct : (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result }))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    }
}


