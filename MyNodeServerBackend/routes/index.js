var express = require('express');
var router = express.Router();
var sqlquery = require('../sqlquery.js');
console.log("Sql query run");
var destroyAndPopulate = function(callback){
    sqlquery.destroyDatabase(function(){
        sqlquery.createDatabase(function(){
            sqlquery.createStoredProcedures(function(){
                sqlquery.populateDatabase(function(){
                    //sqlquery.queryDatabase();
                    sqlquery.findUserByUsername("schafezp",function(err,data){
                        console.log(data);
                    });
                    sqlquery.getCategories(function(err,data){
                        console.log(data);
                    });
                    sqlquery.getThreadCommentsFromThreadTitle('Internet stuff',function(err,data){
                        console.log('Return');
                        console.log(data);
                    });
                });
            });
        });
    });
};
var destroy = function(){
    sqlquery.destroyDatabase(function(){
    });
}
var destroyAndCreate = function(){
    sqlquery.destroyDatabase(function(){
        sqlquery.createDatabase(function(){

        });
    });
}

//Leave just destroy to clear the db and start fresh
//destroy();
//destroyAndCreate();
destroyAndPopulate();
//Use destroyAndCreate to destroy and repopulate the database.
//destroyAndCreate();

/* GET home page. */
/*
router.route('/')
    .get(function(req,res,next){})
*/

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
