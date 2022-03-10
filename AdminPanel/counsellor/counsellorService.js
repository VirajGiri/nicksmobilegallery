angular.module('counsellorService', [])
    .factory('counsellor', function($http, $window, $location,url) {
        var counsellorFactory = {};

        counsellorFactory.getAllEnquiry = function () {
            var getEnquiryUrl = url.urlBase + '/api/getEnquiry';
            return $http.get(getEnquiryUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });
        }
        counsellorFactory.getUserDetails = function (Data) {
            var usersUrl = url.urlBase + '/api/users';
            return $http.post(usersUrl, Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });

        }
        counsellorFactory.addInsurance = function (Data) {
            Data.counsellorId = counsellorFactory.getUserId();
            var usersUrl = url.urlBase + '/api/add_insurance';
            return $http.post(usersUrl, Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });

        }
        counsellorFactory.getInsurance = function () {
            var Data = {};
            Data.counsellorId = counsellorFactory.getUserId();
            Data.counsellor=true;
            var usersUrl = url.urlBase + '/api/get_all_insurance';
            return $http.post(usersUrl, Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });

        }
        counsellorFactory.getUserId = function () {
            return  $window.localStorage['user_id'];
        }

        return counsellorFactory;

    });