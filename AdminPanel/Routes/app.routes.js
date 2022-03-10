/**
 * Created by viraj on 17/11/2021.
 */
var app = angular.module('appRoutes', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'login/login.html',
        controller: 'loginController'
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'loginController'
    });
    $stateProvider.state('admin',{
        url: '/admin',
        templateUrl:'admin/admin.html',
        controller:'adminController'
    });
    $stateProvider.state('users',{
        url: '/users',
        templateUrl:'users/users.html',
        controller:'userController'
    });
    $stateProvider.state('counsellor',{
        url: '/counsellor',
        templateUrl:'counsellor/counsellor.html',
        controller:'counsellorController'
    });
    $stateProvider.state('receptionist',{
        url: '/receptionist',
        templateUrl:'receptionist/receptionist.html',
        controller:'receptionistController'
    });
    $stateProvider.state('team_lead',{
        url: '/team_lead',
        templateUrl:'teamlead/teamlead.html',
        controller:'teamLeadController'
    });

    $stateProvider.state('connErr',{
        url: '/connErr',
        templateUrl:'Login/connErr.html'
    });
    $locationProvider.hashPrefix(''); // by default '!'
     // $locationProvider.html5Mode(true);

});
