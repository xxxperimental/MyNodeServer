app.controller('ForumCtrl', ['$scope','$location','$log','sqlService','$timeout', function ($scope,$location, $log,sqlService,$timeout)
{
    $scope.threadnames = ["General","Help","NSFW","/b/"];
}]);
