const products = require("../products.json")

const getProduct = (req, res) => {
    const item = products.filter(element => {
        return element.id == req.params.id
    })
    if (item) {
        res.status(200).send(item)
    } else {
        res.status(500).send("Item not in list")
    }
}

 module.exports = getProduct