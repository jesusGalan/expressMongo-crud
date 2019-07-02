module.exports = (app) => {
    app.use('/api/users', require('./components/users/route'));
    app.use('/api/products', require('./components/products/route'));
    app.use('/jwt', require('./components/jwt/route'))
};
