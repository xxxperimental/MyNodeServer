app.service('sqlService', ['$http','$log' ,'Useraccount','Category','AuthenticateLogin',function ($http,$log,Useraccount,Category,AuthenticateLogin) {
    var self = this;
    self.username = 'blank';
    self.users = ["One things","two things","three things"];
    self.CSSEclasses = [];
    self.init = function(){
        Useraccount.query(function(data){
            self.users = data;
        });
    };
    self.getUsers = function(callback){
        Useraccount.query(function(data){
            $log.log(data);
            self.users = data;
            callback(data);
        });
    };
    self.getUserByUsername = function(username, callback){
       Useraccount.query({"username":username},function(data){
            self.users = data;
            callback(data);
        });
    };
    self.getCategories = function(callback){
        Category.query(function(data){
            self.categories = data;
            callback(data);
        });
    };
    self.getCategoryByTitle = function(categorytitle,callback){
        Category.query({"categorytitle":categorytitle},function(data){
            //self.categories = data;
            callback(data);
        });
    };
    self.getThreadCommentsByTitle = function(categorytitle,threadtitle,callback){
        Category.query({"categorytitle":categorytitle,"threadtitle":threadtitle},function(data){
            //self.categories = data;
            callback(data);
        });
    };
    self.createThreadComment = function(username,threadtitle,usertext,callback){
        Category.save({"username":username,"threadtitle":threadtitle,"usertext":usertext},function(data){
            callback(data);
        },function(error){
            $log.log('ERROR IN CREATE THREAD COMMENT');
            $log.log(error);
        });

    };
    self.deleteUserAccount = function(username,callback,errorcallback){
        Useraccount.delete({"username":username},function(data){
            callback(data);
        },function(error){
            errorcallback(error);
        });
    };
    self.createUserAccount = function(username,password,callback,errorcallback){
        Useraccount.save({"username":username,"password":password},function(data){
            callback(data);
        },function(error){
            //$log.log('Error in sqlservice');
            //$log.log(error);
            errorcallback(error); //error handling
        });
    };
    self.checkIfAuthenticated = function(username,password,callback){
        self.username = username;
        $log.log('Run an authentication query ');
        //AuthenticateLogin.query({"username":username,"password":password},function(){
        AuthenticateLogin.save({"username":username,"password":password},function(thing){
            //callback for when authenticate turns 200 succesful login

            $log.log('Authentication confirmed in sqlservice');
            callback(thing[0]);
        },function(error){
            if(error.status==603){
                $log.log('Login not authenticated');
                callback(false);
            }else{
                $log.log('Response not understood in sqlService');
                callback(false);
            }
        });
    };
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     * Found from mozilla developer network
     */
    self.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}]);
