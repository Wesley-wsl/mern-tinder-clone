import express from 'express';
import mongoose from 'mongoose';
import Cards from './models/dbCards.js'
import Cors from 'cors';

const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:m8CHCddh2eUvmOQz@cluster0.til1x.mongodb.net/tinderdb?retryWrites=true&w=majority`


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(Cors())

app.get('/', (req, res) => {
    return res.status(200).send('Hello World')
})

app.post('/tinder/cards', (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (error, data) => {
        if(error) {
            res.status(500).send(error)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((error, data) => {
        if(error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(data)
        }
    })
});



app.listen(port, () => {
    console.log('Server is running')
})