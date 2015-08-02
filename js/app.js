var app = angular.module('TubularApp', ['uiGmapgoogle-maps', 'ui.slider'])
.config(function(uiGmapGoogleMapApiProvider) {
	uiGmapGoogleMapApiProvider.configure({
		key: 'AIzaSyAIfnC9eSMi2rkpGTfP6ey9BLWdPEJMk-A',
		v: '3.17',
		libraries: 'geometry,visualization'
	});
});