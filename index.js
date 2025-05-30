const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Get!')
})

app.post('/', (req, res) => {
    res.send('Hello Post!')
})

app.put('/', (req, res) => {
    res.send('Hello Put!')
})

app.delete('/', (req, res) => {
    res.send('Hello Delete!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})