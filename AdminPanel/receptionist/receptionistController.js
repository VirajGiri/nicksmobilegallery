/**
 * Created by viraj on 17/11/2021.
 */
angular.module('receptionistCtrl', [])
    .controller('receptionistController', ['$scope', '$http', '$window', '$location', 'Comment', 'Auth', 'User', function ($scope, $http, $window, $location, Comment, Auth, User) {
        console.log("receptionist controller");
        $scope.logout = function () {
            Auth.logout();
        }

    }]);