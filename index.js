const dotenv = require('dotenv')
const express = require('express')

dotenv.config()
const port = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express);


app.get('/', (req, res) => {
    res.render('greeting')})
    

app.listen(port, () => console.log('connected'))
