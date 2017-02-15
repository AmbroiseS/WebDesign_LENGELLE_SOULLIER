

var app=angular.module("homeApp",[])


app.controller("ctrlForm", ['$scope',function($scope){

	$scope.text = 'Email';


	$("form").submit(function(e) {
		e.preventDefault();
		var $form = $(this);
		$.post($form.attr("action"), $form.serialize())
		.done(function(data) {
			$("#html").html(data);
			$("#formulaire").modal("hide"); 
		})
		.fail(function() {
			alert("Erreur, vérifier les Informations");
		});
	});


}]);

	

