/**
 * Created by viraj on 17/11/2021.
 */
angular.module('loginCtrl', [])
    .controller('loginController', function($scope, $http, $window, $rootScope, $location, Auth, AuthUser) {


        var vm = this;
        // var name;
        var urole;
        var SchoolID = $window.localStorage['SchoolId'];

        var Role = $window.localStorage['Role'];
        if (Role == null || Role == undefined) {
            Auth.logout();
            $location.path('/login');
        }

        vm.loggedIn = Auth.isLoggedIn();
        $rootScope.$on('$routeChangeStart', function(){
            vm.loggedIn = Auth.isLoggedIn();

            vm.Username = AuthUser.getUser();
            urole = $window.localStorage['Role'];
            vm.role =urole;

        });

        vm.doLogin = function(){

            vm.processing = true;
            vm.error = '';
            vm.Invalid = false;
            vm.InvalidUser = false;
            console.log("i am in login",vm.loginData.username, vm.loginData.password );


            // $location.path('/admin');

            Auth.login(vm.loginData.username, vm.loginData.password)
                .then(function(res){
                    console.log("data of res login",res);
                    vm.processing = false;

                    if(res == "Invalid password"){
                        vm.Invalid = true;
                    }
                    if(res == "user dosent exist"){
                        vm.InvalidUser = true;
                    }
                    if(res.Role == 'receptionist'){
                        $location.path('/receptionist');
                    }
                    if(res.Role == 'admin' ){
                        $location.path('/admin');
                    }
                    if( res.Role == 'teamlead' ){
                        $location.path('/teamlead');
                    }
                    if(res.Role == 'user'){
                        $location.path('/users');
                    }
                    if(res.Role == 'counsellor'){
                        $location.path('/counsellor');
                    }

                    else{
                        vm.error = res.data.message;
                        alert("something error, please try again");
                    }
                });

        }

        vm.doLogout = function(){
            Auth.logout();
            $location.path('/login');
        }





    });