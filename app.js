const express = require('express');
const app = express();
const port = 3001;
const postRouter = require('./routers/postsRouter'); //Importa un router per gestire le operazioni relative ai post
const notFound = require('./middlewares/notFound');


app.use(express.static('public')); //cartella statica

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ciao a tutti!');
})

app.use('/api/posts', postRouter); //router

app.use(notFound);



//avvio del server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});