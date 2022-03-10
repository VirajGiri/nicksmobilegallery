/**
 * Created by viraj on 17/11/2021.
 */
angular.module('userCtrl', [])
    .controller('userController', ['$scope', '$http', '$window', '$location', 'Comment', 'Auth', 'User', function ($scope, $http, $window, $location, Comment, Auth, User) {
        console.log("user controller");
        $scope.logout = function () {
            Auth.logout();
        }


    }]);