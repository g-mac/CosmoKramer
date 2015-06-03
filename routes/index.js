var express = require('express');
var router = express.Router();
// a convenient variable to refer to the HTML directory
var html_dir = './html/';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET Hello World page. */
router.get('/helloworld', function (req, res) {
    res.render('helloworld', {title: 'Hello, Simon!'})
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET HTML test page. */
router.get('/test', function(req, res) { // routes to serve the static HTML files
    res.sendfile(html_dir + 'test.html');
});

module.exports = router;
