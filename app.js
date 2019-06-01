const app = require('./config/server'); 

require('./app/routes/home')(app);
require('./app/routes/contato')(app);
require('./app/routes/notFound')(app);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});