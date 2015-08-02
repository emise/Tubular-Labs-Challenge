app.controller('MainController', function($scope, $rootScope, $timeout, MyYelpAPI, sharedData) {
	console.log("enter MainController");
	$scope.info = [];
	$scope.text = "";
	$scope.numResults = 0;
	$scope.searchResults = "";
	$scope.loadingMsg = "";
	$scope.numBiz = 20;
	$scope.numRad = 15000;

	$scope.submit = function() {
		var keywords = $scope.text.split(';');
		var dataPromise = MyYelpAPI.retrieveYelp(keywords[0], keywords[1], $scope.numBiz, $scope.numRad);
		dataPromise.then(function(result) {
			$scope.info = result;
			console.log("mainController data: "+ $scope.info);
			sharedData.setData($scope.info);
			$scope.numResults = $scope.info.data.businesses.length;
			$scope.searchResults = "Search returned ";
			$scope.searchResults += $scope.numResults;
			if ($scope.numResults == 1)
				$scope.searchResults += " result.";
			else
				$scope.searchResults +=  " results.";
			$scope.loadingMsg = "Sorry for the load time :( It will take a few seconds" +
				" for your results to appear on the map.";

			$timeout(function(){
				$rootScope.$broadcast('submitted'); 
			},1000);
			console.log("broadcasted");
		});
	};
});