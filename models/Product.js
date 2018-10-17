const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The product name is required']
    },
    brand: {
        type: String,
        required: [true, 'The product brand is required']
    },
    image: {
        type: String, default: ''
    },
    specs: { //for size, color, etc
        type: Array,
        default: []
      }
},{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})

module.exports = mongoose.model('Product', productSchema)