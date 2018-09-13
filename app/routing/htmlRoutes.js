const path = require('path');

module.exports = function(app){

    app.get('/app/public/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // test for using a style sheet. works but there must be an easier way
    // app.use('/app/public/style.css', function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/style.css"))
    // })

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
}


