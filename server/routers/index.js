const { errHandler, notFound } = require('../middlewares/errHandler');
const userRouter = require('./user');

const initRouters = app => {
    app.use('/api/user', userRouter);

    app.use(errHandler);
    app.use(notFound);
};

module.exports = initRouters;
