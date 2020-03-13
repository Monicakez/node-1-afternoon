const products = require("../products.json")

const getProducts = (req, res) => {
    const findPrice = products.filter(element => {
        return element.price >= req.query.price
    })
    if (findPrice) {
        res.status(200).send(findPrice)
    } else {
        res.status(200).send(products)
    }
}

module.exports = getProducts; 