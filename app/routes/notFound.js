module.exports = (app) => {
    app.get('/notfound', (req, res) => {
        res.render('notFound');
    })
};