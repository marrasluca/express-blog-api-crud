const express = require('express');
const app = express();
const port = 3000;
const postRouter = require('./routers/postsRouter'); //Importa un router per gestire le operazioni relative ai post

app.use(express.static('public')); //cartella statica

app.get('/', (req, res) => {
    res.send('Ciao a tutti!');
})

// app.use('api/posts', postRouter); //router


//avvio del server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});