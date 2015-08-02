// service to pass Yelp data between controllers
app.service('sharedData', function () {
	var data = [];

	return {
		getData: function() {
			return data;
		},
		setData: function(value) {
			data = value;
		}
	};
});