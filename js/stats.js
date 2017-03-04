var app2=angular.module("statsApp", ["chart.js"]);



app2.controller("ctrChart", function ($scope,$http) {


 $scope.filters=[
 ["rdb1",1],["rdb2",2],["rdb3","3"],["rdb4","4"],["rdb5","5"],
 ["rdb6","6"],["rdb7","7"],["rdb8","8"],["rdb9","9"],["rdb10","10"],
 ["rdb11","11"],["rdb12","12"],["rdb13","13"],["rdb14","14"],["rdb15","15"],
 ["rdb16","16"],["rdb17","17"],["rdb18","18"],["rdb19","19"],["rdb20","20"]

 ];

 $scope.radio = {
  value: 1
};



$scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
$scope.dataPie = [300, 500, 100];

$scope.items = []


$scope.getItems = function() { 
  $http({
    method: 'GET',
    url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=reseau-cyclable&rows=20&facet=arrdt&facet=statut&facet=typologie&facet=sens_velo'
  }).then(function successCallback(response) {
    $scope.items=response.data;
    console.log($scope.items.records);
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}


});




