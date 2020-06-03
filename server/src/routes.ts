import express, { request, response } from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    console.log('User List');

    return response.json({message: 'Hello'});
});

export default routes;