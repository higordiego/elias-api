const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))


const phrase = ['coloque uma frase aqui', 'segunda frase aqui', 'terceira frase aqui']

app.get('/phrase', (req, res) => {
    try {
        var rand = phrase[Math.floor(Math.random() * phrase.length)];
        res.status(200).json({ phrase: rand })
    } catch (err) {
        res.status(500).json(err)
    }
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`flying witch in host http://localhost:${port} ...`))
