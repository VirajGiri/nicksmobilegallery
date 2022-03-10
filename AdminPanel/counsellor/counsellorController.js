/**
 * Created by viraj on 17/11/2021.
 */
angular.module('counsellorCtrl', [])
    .controller('counsellorController', ['$scope', '$http', '$window', '$location', 'Auth','counsellor', function ($scope, $http, $window, $location, Auth,counsellor) {
        console.log("counsellorController");

        $scope.AddInsuranceData = {};
        $scope.GetInsuranceFormsData = {};
        GetInsuranceForms();

        function GetInsuranceForms() {
            counsellor.getInsurance().then(function (res) {
                console.log("res",res);
                $scope.GetInsuranceFormsData = res.data;
            })
        }
        $scope.AddInsurance = function () {
            console.log("AddInsuranceData",$scope.AddInsuranceData);
            counsellor.addInsurance($scope.AddInsuranceData).then(function (res) {
                console.log("res",res);
                if(res.data.success){
                    $scope.message = res.data.message;
                    launch_toast();
                    $scope.AddInsuranceData = {};
                }
            });
        }
        
        
        
        
        
        
        
        /*No Change Functions starts .......................................................................*/
        $(document).ready(function () {
            var current_fs, next_fs, previous_fs; //fieldsets
            var opacity;

            $(".next").click(function () {

                current_fs = $(this).parent();
                next_fs = $(this).parent().next();

                //Add Class Active
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                    step: function (now) {
                        // for making fielset appear animation
                        opacity = 1 - now;

                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({'opacity': opacity});
                    },
                    duration: 600
                });
            });

            $(".previous").click(function () {

                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();

                //Remove class active
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

                //show the previous fieldset
                previous_fs.show();

                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                    step: function (now) {
                        // for making fielset appear animation
                        opacity = 1 - now;

                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        previous_fs.css({'opacity': opacity});
                    },
                    duration: 600
                });
            });

            $('.radio-group .radio').click(function () {
                $(this).parent().find('.radio').removeClass('selected');
                $(this).addClass('selected');
            });

        });
        
        function launch_toast() {
            var x = document.getElementById("toast")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
        }

        $scope.tabActive = function (tabName) {
            $scope.homeActive = false;
            $scope.insurance_formActive = false;
            $scope.messagesActive = false;
            $scope.settingsActive = false;
            switch (tabName) {
                case 'home':
                    $scope.homeActive = true;
                    break;
                case 'insurance_form':
                    $scope.insurance_formActive = true;
                    break;
                case 'messages':
                    $scope.messagesActive = true;
                    break;
                case 'settings':
                    $scope.settingsActive = true;
                    break;
                default:
                    $scope.homeActive = true;
                    $scope.insurance_formActive = false;
                    $scope.messagesActive = false;
                    $scope.settingsActive = false;
            }
            console.log("Active tab",$scope.homeActive);

        }
        /*No Change Functions ends .......................................................................*/

    }]);