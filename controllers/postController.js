const posts = require('../data/posts');

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post){
        res.status(404)

        return res.json(
            {
                status: 404,
                error: "Not found",
                message: 'Post not found'
            }
        );
    }
    res.json(post);  
}

function store(req, res) {
    
    
}

function update(req, res) {
    
}

function patch(req, res) {
    
}

function destroy(req, res) {
    const id = parseInt(req.params.id); //estrae l'ID dal parametro della richiesta

    const post = posts.find(post => post.id === id);//trova il post con l'ID

    posts.splice(posts.indexOf(post), 1); //cerca il post nell'array e lo rimuove usando splice
    res.sendStatus(204);//indica che la richiesta è stata completata con successo
    
}

module.exports = {index, show, store, update, patch, destroy};
