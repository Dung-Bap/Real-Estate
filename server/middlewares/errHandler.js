const notFound = (req, res, next) => {
    const err = new Error(`Router ${req.originalUrl} Not Found`);
    res.status(404);
    next(err);
};

const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    return res.status(statusCode).json({
        success: false,
        message: err?.mess,
    });
};

module.exports = { notFound, errHandler };
