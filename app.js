const app = require('express')();

// Define routes
app.use(require('./api-routes/user.routes'));

// Start listening on configured port
const port = require('./config/port.config');
app.listen(port, () => {
    console.log('Listening on port ' + port);
});