angular.module('adminService', [])
    .factory('Admin', function($http, $window, $location,url) {
        var adminFactory = {};

        adminFactory.getAllUsers = function () {
            var getEnquiryUrl = url.urlBase + '/api/get_all_users';
            return $http.get(getEnquiryUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });
        }
        adminFactory.addUser = function (Data) {
            var usersUrl = url.urlBase + '/api/add_user';
            return $http.post(usersUrl, Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });
        }
        adminFactory.getUserByRole = function (Data) {
            var usersUrl = url.urlBase + '/api/get_all_users';
            return $http.post(usersUrl, Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': $window.localStorage['token']
                }
            });
        }
        return adminFactory;
    });