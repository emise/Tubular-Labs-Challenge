function randomString(length, chars) {
	var result = '';
	for (var i = length; i > 0; --i) 
		result += chars[Math.round(Math.random() * (chars.length - 1))];
	return result;
}

app.factory("MyYelpAPI", function($http) {
	var counter = -1;
	var retrieveYelp = function(location, keyword, numBiz, numRad) {
			counter++;
            console.log('counter: '+counter);
			var method = 'GET';
			var url = 'http://api.yelp.com/v2/search';
			var params = {
				callback: 'angular.callbacks._' + counter,
				location: location,
				oauth_consumer_key: 'n7AOHPm4TZ0GryHYnRAcmQ',
				oauth_token: 'fZZE_gJGbdHGQ7DE_iWaBGrdMwF1uEug',
				oauth_signature_method: "HMAC-SHA1",
				oauth_timestamp: new Date().getTime(),
				oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
				term: keyword,
				radius_filter: numRad,
				limit: numBiz
			};
            var consumerSecret = 'G8Rq0rym031NcdKRoYHF0VGcDls';
            var tokenSecret = 'y0nH2tNfCUPc5azW8xXJ27DocXQ';
            var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
            params['oauth_signature'] = signature;

            return $http.jsonp(url, {params: params}).then(function(result){
            		return result;
            	});
        }
	return {
		retrieveYelp: retrieveYelp
	};
});