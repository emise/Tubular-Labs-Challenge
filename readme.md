This app searches for the most relevant 20 businesses according to user input of
address/location and keyword(s). 

### It is implemented with: 
- AngularJS
- Yelp Search API 2.0
- Google Maps Javascript API v3.17
- Bootstrap 3

### Additional modules and dependencies:
- angular-google-maps http://angular-ui.github.io/angular-google-maps/#!/
- oauth-signature https://github.com/bettiolo/oauth-signature-js
- lodash https://lodash.com/
- angular-slider http://prajwalkman.github.io/angular-slider/

### Description & Features
Search for a business by entering either a location (i.e. SF, NYC) or an 
address (i.e. 123 Market Street, San Francisco, CA, 90000), followed by a semicolon, 
and a keyword or keywords of a business you want to search for. For example, you can
enter "SF; florist".

Adjust the search radius and number of businesses to display in the results before
searching by using the sliders in the upper-right corner.

Either click "Search" or press "Enter" to search. Note: loading map markers is 
slow, so if you've entered information once and nothing has shown up, wait a bit and
it should show up. The average amount of time it takes is about 7 seconds for all the
markers to load.

After map markers have loaded, when you click on a marker, an info window should 
appear with the business name, phone number, address, and rating. 

### Problems Encountered
As this was my first time building an app in AngularJS, I had not understood how a lot of things worked. One thing that caused a lot of trouble was the handling of asynchronous requests. I was not aware that the $http function returned data asynchronously, which caused a lot of headache as I then was accessing data that didn't exist yet. I solved this issue after reading about promises.

Another easier problem that I ran into was how to send data between controllers, which I solved by creating a service that is used by both controllers. 

I also needed to be able to listen to events from another controller while in one controller, which I solved by using promises and broadcast/on. At one point I considered just using one controller for everything so this wouldn't be needed, but modularity is a good programming practice and I perservered to find the right solutions.

### Room for Improvement
- Because there is a wait time for map markers to appear, a loading screen to notify users that the request is being processed should be implemented.
- Yelp limits the max number of businesses in one request to 20; to list more, I can implement multiple requests and add additional markers to the existing map.
- After clicking "Search", page should scroll to map automatically.
- Should cache results so that inputs that are similar to older ones do not send additional requests. Additionally, if the user simply clicks "Search" again without changing the input, maps should not reload.
- Implement an option to sort by Relevance, Distance, or Rating.
- Clicking on business name in map marker info window should take you to the business's website directly.
- Stylistic overhaul - I would theme Maps, and make buttons and sliders match in theme.