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

$scope.var50=5;
$scope.var30=5;


$scope.getPieDataForArdt = function (ardt){
  $http({
    method: 'GET',    
    url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=reseau-cyclable&rows=1000&facet=arrdt&facet=statut&facet=typologie&facet=sens_velo&refine.statut=VOIE+50&refine.arrdt='+ardt

  }).then(function successCallback(response) {
    $scope.var50=response.data.records.length;
  });
  $http({
    method: 'GET',    
    url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=reseau-cyclable&rows=1000&facet=arrdt&facet=statut&facet=typologie&facet=sens_velo&refine.statut=VOIE+30&refine.arrdt='+ardt

  }).then(function successCallback(response) {
    $scope.var30=response.data.records.length;
    console.log("pie func" +$scope.var30+" "+ $scope.var50);
  });




  $scope.labelsPie = ["Voies 50", "Voies 30"];
  $scope.dataPie = [$scope.var50, $scope.var30];

}

});







