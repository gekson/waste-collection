import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('User List');
    response.json([
        'Paul',
        'Ringo',
        'John',
        'George'
    ]);
});

app.listen(3333);