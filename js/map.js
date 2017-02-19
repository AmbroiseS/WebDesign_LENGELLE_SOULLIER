var app1=angular.module("mapApp",[])


app1.controller("switchButtons",['$scope', function($scope){


	$scope.ifValue=false;

	$scope.showIf = function() {
		return $scope.ifValue;
	};

	$scope.hideIf = function() {
		return !$scope.ifValue;
	};


}]);





