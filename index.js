const express = require('express');

let app = express();

const PORT = 5000;
const productRoute = require('./routes/product')

// app.get('/get-product', (req, res) => {
//     res.send('this product is valid');
// });

app.use(productRoute)

app.listen(PORT, (req,res) => {
    console.log("server on port " + `${PORT}`);
});




