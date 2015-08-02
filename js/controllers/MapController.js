app.controller("MapController", function($scope, $timeout, uiGmapGoogleMapApi, uiGmapIsReady, sharedData) {
	
	// map initialization
	var areaLat = 37.773;
	var areaLng = -122.420;
	var areaZoom = 13;

	// getting data from yelp
	$scope.data = [];
	$scope.callOnBroadcast = function(maps) {
		// retrieving data
		var dataPromise = sharedData.getData();
		$scope.data = dataPromise.data;

		// setting map parameters from data
		$scope.map.center = $scope.data.region.center;
		$scope.map.marker = $scope.data.businesses;
	}
	uiGmapGoogleMapApi.then(function(maps) {
		// intialize map
		$scope.map = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
		$scope.options = { scrollwheel: false };

		// listen for submit to add markers
		$scope.$on('submitted', function(){
			$scope.callOnBroadcast();
		});
	});

	// show info window when you click on a marker
	var onMarkerClicked = function(marker) {
		marker.showWindow = true;
		$scope.$apply();
	};

});