angular.module('userService', [])
    .factory('User', function($http, $window, $location,url) {
        var UserFactory = {};

        UserFactory.getAllEnquiry = function () {
            var getEnquiryUrl = url.urlBase + '/api/getEnquiry';
            return $http.get(getEnquiryUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });
        }
        UserFactory.getUserDetails = function (Data) {
            var usersUrl = url.urlBase + '/api/users';
            return $http.post(usersUrl, Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });

        }

    });