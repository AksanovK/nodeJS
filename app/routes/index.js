const usersRoutes = require('./data_routes');
module.exports = function(app) {
    usersRoutes(app);
};