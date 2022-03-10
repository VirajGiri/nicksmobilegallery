/**
 * Created by viraj on 17/11/2021.
 */
angular.module('loginService', [])

    .factory('Auth', function($http, $window, $location, $q, AuthToken,url){
        var authFactory = {};
        var nameIsNam;

        authFactory.login = function(username, password){
            var loginUrl = url.urlBase + '/api/login';
            localStorage.getItem('token') ? nameIsNam = localStorage.getItem('token') : nameIsNam = null;
            if (nameIsNam == undefined || nameIsNam == null) {
                return $http.post(loginUrl, {
                    username: username,
                    password: password
                }).then(function (res) {

                    if (res.data.message == "Invalid password") {
                        return "Invalid password";
                    }
                    if (res.data.message == "user dosent exist") {
                        return "user dosent exist";
                    }
                    if (res.data.message == "successfuly login") {
                        AuthToken.setToken(res.data.token);
                        $window.localStorage['token'] = res.data.token;
                        $window.localStorage['Role'] = res.data.data.Role;
                        $window.localStorage['user_id'] = res.data.data._id;
                        $window.localStorage['username'] = res.data.data.username;
                        console.log(res.data.data);
                        return res.data.data;
                    }
                    return res.data.data;
                });
            }
            else {
                authFactory.logout();
                return $http.post(loginUrl, {
                    username: username,
                    password: password
                }).then(function (res) {
                    if(res.data.message == "Invalid password"){
                        return "Invalid password";
                    }
                    if(res.data.message ==  "user dosent exist"){
                        return "user dosent exist";
                    }
                    if(res.data.message == "successfuly login"){
                        AuthToken.setToken(res.data.token);
                        $window.localStorage['token'] = res.data.token;
                        $window.localStorage['Role'] = res.data.data.Role;
                        $window.localStorage['user_id'] = res.data.data._id;
                        $window.localStorage['username'] = res.data.data.username;

                        console.log(res.data.data);
                        return res.data.data;
                    }
                    return res.data.data;
                });
            }
        }

        authFactory.logout = function(){
            return AuthToken.setToken();
        }

        authFactory.isLoggedIn = function(){
            if(AuthToken.getToken()){
                return true;
            }
            else
                return false;
        }

        authFactory.getUsers = function(data){
                var user = $window.localStorage[data];
                return user;
        }

        return authFactory;
    })
    .factory('AuthToken', function($window,$location){
        var authTokenFactory = {};

        authTokenFactory.getToken = function(){
            var token = $window.localStorage.getItem('token');
            return token;
        }
        authTokenFactory.setToken = function(token){
            if(token)
                $window.localStorage.setItem('token', token);
            else
                $window.localStorage.removeItem('token');
            $window.localStorage.removeItem('username');
            $window.localStorage.removeItem('Role');
            $window.localStorage.removeItem('userId');
            $location.path('/login');

        }


        return authTokenFactory;
    })
    .factory('AuthInterceptor', function($q, $location, AuthToken){
        var interceptorFactory = {};

        interceptorFactory.request = function(config){
            var token = AuthToken.getToken();
            if(token){
                config.headers['x-access-token'] = token;
            }
            return config;
        }

        interceptorFactory.responseError = function(res){
            if(res.status == 403)
                $location.path('/login');
            return $q.reject(res);
        }
        return interceptorFactory;
    })
    .factory('AuthUser', function($window){
        var authUserFactory = {};
        authUserFactory.getUser = function(){
            var user = $window.localStorage['username'];
            return user;
        }
        authUserFactory.setUser = function(user){
            if(user)
                $window.localStorage['username'] = user;
            else
                $window.localStorage.removeItem('username');
            $window.localStorage.removeItem('SchoolId');
            $window.localStorage.removeItem('Role');
            $window.localStorage.removeItem('userId');
        }

        return authUserFactory;
    })
    .factory('AuthenticationFactory', function ($window) {
        var auth = {
            isLogged: false,
            isAuthenticated: function () {
                if ($window.localStorage.token && $window.localStorage.userId) {
                    this.isLogged = true;
                } else {
                    this.isLogged = false;
                }
            }
        }

        return auth;
    })
    .factory('UserAuthenticationFactory',function ($window, $http) {
        return {
            isAuthenticatedForAccess: function (valueOfUrl) {
                return $http.post("/api/IsUserAuthenticatedForUrl", {'urlAddress':valueOfUrl,'Roles':localStorage.getItem('Role')},{
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': $window.localStorage['token']
                    }
                })
            }

        }
    }).factory('url', function() {
    return {
        urlBase : 'http://localhost:21011'
        // urlBase : 'http://localhost:22011'
        // urlBase : 'http://13.234.82.183:21015'
    };
})
    .config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);