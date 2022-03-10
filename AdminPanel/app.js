/**
 * Created by viraj giri on 17/11/2021.
 */

var myApp = angular.module('myApp', ['ngFileSaver','appRoutes','loginService','loginCtrl','adminCtrl','adminService','userCtrl','userService', 'counsellorCtrl','counsellorService','receptionistCtrl','receptionistService','teamLeadCtrl','teamLeadService','navbar'])

    .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
    });