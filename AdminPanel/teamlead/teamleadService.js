angular.module('teamLeadService', [])
    .factory('teamLead', function($http, $window, $location,url) {
        var TeamLeadFactory = {};

        TeamLeadFactory.getAllEnquiry = function () {
            var getEnquiryUrl = url.urlBase + '/api/getEnquiry';
            return $http.get(getEnquiryUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });
        }
        TeamLeadFactory.getUserDetails = function (Data) {
            var usersUrl = url.urlBase + '/api/users';
            return $http.post(usersUrl, Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });

        }

    });