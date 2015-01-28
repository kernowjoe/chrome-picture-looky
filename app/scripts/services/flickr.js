'use strict';

angular.module('flickrSearchApp')
  .service('flickr', ['$rootScope','$http', function ($rootScope, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

        var serviceModel = {
            search : flickrPull,
            images : [],
            loading : {
                images : false
            },
            page : 1
        };

		var options = {
			key : "b044f705296205f71f35f96c5273129d",
			secret : "9402706679edf869"
		};
        function flickrPull(search) {

            loading();

            var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&' +
                'api_key=' + options.key + '&' +
                'text=' + encodeURIComponent(search) + '&' +
                'per_page=20&page='+ serviceModel.page + '&' +
                'format=json&nojsoncallback=1&';


            $http
                .get(url)
                .success(handleSuccess);
        }

        function handleSuccess(response) {

            console.log("got a response", response);

            if(response.stat == 'ok') {

                angular.copy(response.photos.photo, serviceModel.images);
                serviceModel.page = response.photos.page;
            } else {

                angular.copy([], serviceModel.images);
            }

            loaded()
        }

        function loading() {

            serviceModel.loading.images = true;
        }
        function loaded() {

            serviceModel.loading.images = false;

        }

        return serviceModel;

  }]);
