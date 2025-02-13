const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', postController.store);
router.put('/:id', postController.update);
router.patch('/:id', postController.patch);
router.delete('/:id', postController.delete);


module.exports = router;
