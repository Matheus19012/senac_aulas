const express = require('express');
const router = express.Router();


router.get('/', (request, response) => {
    response.status(200).send('Router está a funfar :D');
});

module.exports = router; 