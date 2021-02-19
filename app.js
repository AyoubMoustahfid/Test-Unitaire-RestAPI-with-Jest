const express = require('express')
const mongoose = require('mongoose')

const app = express();
require('dotenv').config()
app.use(express.json())

// all routers
const ownerRouter = require('./routers/ownerRouter')
const agenceRouter = require('./routers/agenceRouter')
const creditCardRouter = require('./routers/credit_cardRouter')
const compteRouter = require('./routers/compteController')
const gabOperationRouter = require('./routers/gabOperationRouter')
const moneyProviderRouter = require('./routers/moneyProviderRouter')


mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db is connect'))
  .catch(err => console.log('not connect to the database'))


app.use('/api/owner', ownerRouter)
app.use('/api/agence', agenceRouter)
app.use('/api/credit_card', creditCardRouter)
app.use('/api/compte', compteRouter)
app.use('/api/gabOperation', gabOperationRouter)
app.use('/api/moneyProvider', moneyProviderRouter)


// run server
const port = process.env.PORT || 3000;
app.listen(port, ()  => {
    console.log(`server is running in port: ${port}`)
})


module.exports = app