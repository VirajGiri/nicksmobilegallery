angular.module('navbar',[])
.directive('simpleNavbar', function () {

    return {
        templateUrl: 'navbar/navbar.html',
        controller: function($scope,$window, $location,Auth) {

            $scope.userName =  Auth.getUsers('username');
            console.log("username",Auth.getUsers('username'));

            $scope.logout = function () {
                Auth.logout();
                $window.location.reload();
            }
        },
    };
});