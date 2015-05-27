VIEWS_HIDES.controller("TestController", function($scope,$http){

    $scope.posts = {};
    $scope.loading= true;
    $scope.jsonposts = 'http://jsonplaceholder.typicode.com/posts';

    $http.get($scope.jsonposts)
    	.success(function(data){

    		$scope.posts = data;
    		$scope.loading= false;


    	})
    	.error(function(err){
    		$scope.loading= false;

    	});

});