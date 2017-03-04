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




$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
$scope.series = ['Series A', 'Series B'];
$scope.data = [
[65, 59, 80, 81, 56, 55, 40],
[28, 48, 40, 19, 86, 27, 90]
];
$scope.onClick = function (points, evt) {
  console.log(points, evt);
};
$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
$scope.options = {
  scales: {
    yAxes: [
    {
      id: 'y-axis-1',
      type: 'linear',
      display: true,
      position: 'left'
    },
    {
      id: 'y-axis-2',
      type: 'linear',
      display: true,
      position: 'right'
    }
    ]
  }
};


$scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
$scope.dataPie = [300, 500, 100];

$scope.arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

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


/*
angular
.module('demoApp', ['mobiscroll-select'])
.controller('demoController', ['$scope', function ($scope) {

  $scope.settings = {
    theme: 'material',
    display: 'center',
    minWidth: 200
  };


}]);
*/




