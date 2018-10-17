const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

//REST API

//get product
router.get('/', (req, res) => {
    Product.find().then(products => {
        return res.status(200).json(products)
    }).catch(e => next(e))
});

//create new product
router.post('/', (req, res) => {
    Product.create(req.body).then(products => {
        return res.status(201).json(products)
    }).catch(err => {
        return res.status(500).json(err)
    })                    
})

//get one product
router.get('/:id', (req, res) => {
    Product.findById(req.params.id).then(product => {
        if (!product) return res.status(404)
        return res.status(200).json(product);
    }).catch(err => {
        return res.status(500).json(err);
    });
});

//edit product
/* 
    this route make an update to the model product, 
    but respect the field even when they don't come in the update
*/
router.put('/:id', (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(product => {
        return res.status(202).json(product)
    }).catch(err => {
        return res.status(404).json(err);
    });
})

//delete a phone
router.delete('/:id', (req, res, next) => {
    Product.findByIdAndRemove(req.params.id).then(p => {
        res.status(200).json(p)
    }).catch(e => {
        res.status(500).json({message:"Something went wrong"})
        next(e)
    });
});

module.exports = router;