/**
 * Created by viraj on 17/11/2021.
 */
angular.module('teamLeadCtrl', [])
    .controller('teamLeadController', ['$scope', '$http', '$window', '$location', 'Comment', 'Auth', 'User', function ($scope, $http, $window, $location, Comment, Auth, User) {
        console.log("teamLead controller");
        $scope.logout = function () {
            Auth.logout();
        }


    }]);