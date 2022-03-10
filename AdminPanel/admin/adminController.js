/**
 * Created by viraj on 17/11/2021.
 */
angular.module('adminCtrl', [])
.controller('adminController', ['$scope', '$http', '$window', '$location', 'Auth', 'Admin', function ($scope, $http, $window, $location, Auth, Admin) {
     console.log("admin controller");
    $scope.showAddUserDiv = false;
    $scope.myFormUsersData = {};
    $scope.myFormUsersDataTemp = [];
    $scope.isAddNewUser = function () {
         $scope.showAddUserDiv = true;
     }
     $scope.logout = function () {
         Auth.logout();
     }

    Admin.getAllUsers().then(function (res) {
                console.log("addUser res",res);
                if(res.data) {
                    $scope.myFormUsersDataTemp = res.data;
                }
            })



    $scope.AddUser = function () {
        $scope.myFormUsersData.created_by = Auth.getUsers('Role');
        $scope.myFormUsersData.created_by_id = Auth.getUsers('user_id');
        Admin.addUser($scope.myFormUsersData).then(function (res) {
            console.log("addUser res",res.data);
            if(res.data.success){
                $scope.message = res.data.message;
                launch_toast();
                $scope.myFormUsersData = {};
            }
        })
    }

     function launch_toast() {
        var x = document.getElementById("toast")
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
     }
}]);