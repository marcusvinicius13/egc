import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
    return response.json({message: 'Rota get de usuário testada!'});
});

export default usersRouter;
