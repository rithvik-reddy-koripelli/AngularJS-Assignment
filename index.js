var app = angular.module("myApp",["ngRoute"]);
angular.module("myApp")
    .config(function($routeProvider)
{
    $routeProvider
    .when("/",{
        templateUrl :"main.html",
        controller:'myAppController'
    })
    .when("/add",{
        templateUrl : "add.html"
    }).when("/edit",{
        templateUrl :"edit.html"
    }).when("/main",{
        templateUrl : "main.html"
    })
});

app.controller('myAppController',function($rootScope,$scope,$http){
    console.log("here");
   $http.get("http://localhost:8080/Rest-Assignment/webapi/members")
        .then(function(response){
            $scope.result = response.data;
            console.log("root scope "+$rootScope);
            $scope.deleteRecord = function(name){
                console.log(name+"ok");
                $http.delete("http://localhost:8080/Rest-Assignment/webapi/members/"+name)
                    .then(function(response){
                        console.log(response.data);
                        if(response.data)
                        {
                            for(var i =0;i<$scope.result.length;i++)
                            {   
                                if($scope.result[i].name==name)
                                    break;
                            }
                            $scope.result.splice(i,1);
                            
                        }
                    });
            }
            console.log($scope.result);
        });
});

app.directive("myTable",function(){
    return {
        transclude:true,
        templateUrl:'myTableTemplate.html'
    };
});



app.controller('myAppControllerAdd',function($scope,$http){

   $scope.name = "";
   $scope.email ="";
   $scope.password = "";
   $scope.addRecord = function(){
       var obj = {'name':$scope.name,'email':$scope.email,'password':$scope.password};
        $http.post("http://localhost:8080/Rest-Assignment/webapi/members",obj)
            .then(function(response){
            console.log(response.data);
            if(response.data)
                alert("Successfully Added Record");
            else
                alert("Couldnt Add Record");
            $scope.name = "";
            $scope.email ="";
            $scope.password = "";
        });
    };
});


app.controller('myAppControllerEdit',function($rootScope,$scope,$http){
    $http.get("http://localhost:8080/Rest-Assignment/webapi/members")
    .then(function(response){
        $scope.result = response.data;
    $scope.range = [];
    for(var i=0;i<$scope.result.length;i++)
    {
        $scope.range.push(i);
    }
    $scope.editRecord = function(index){
        console.log("index:"+index);
        var obj = {'name':$scope.result[index].name,'email':$scope.result[index].email,'password':$scope.result[index].password};
        console.log("object:"+obj);
         $http.put("http://localhost:8080/Rest-Assignment/webapi/members/",obj)
             .then(function(response){
             console.log(response.data);
             if(response.data)
                 alert("Successfully Edited Record");
             else
                 alert("Couldnt Edit Record");
         });
     };
 });
});