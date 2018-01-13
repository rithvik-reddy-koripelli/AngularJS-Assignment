var app = angular.module("myApp",[]);
angular.module("myApp")
    .controller('myAppController',function($scope,$http){
        console.log("here");
       $http.get("http://localhost:8080/Rest-Assignment/webapi/members")
            .then(function(response){
                $scope.result = response.data;
                console.log($scope.result);
            });
    });

app.directive("myTable",function(){
        return {
            transclude:true,
            templateUrl:'myTableTemplate.html'
            // template:"<h2>directive</h2>"
        };
    });