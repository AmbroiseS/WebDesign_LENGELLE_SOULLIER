var app1=angular.module("mapApp",[])

var switcher=0;
var switcher1=0;




app1.controller("switchButtons",['$scope', function($scope){


	$scope.manageFilters= function(){
		//remove all filters if switch is turned off
		if(switcher1){
			document.getElementById('frameMap').src=document.getElementById('frameMap').src.replace('&refine.statut=VOIE%20'+15, '');
			document.getElementById('frameMap').src=document.getElementById('frameMap').src.replace('&refine.statut=VOIE%20'+30, '');
			document.getElementById('frameMap').src=document.getElementById('frameMap').src.replace('&refine.statut=VOIE%20'+50, '');
			document.getElementById('frameMap').src=
			document.getElementById('frameMap').src.replace('&refine.statut=AIRE%20PIETONNE&refine.statut=ZONE%20DE%20RENCONTRE', '');
		}
		switcher1=switcher1===1? 0:1;


	}

	$scope.setFilter = function(val){
		//remove or add specific speed filter		
		if (document.getElementById('frameMap').src.includes('&refine.statut=VOIE%20'+val) ){
			document.getElementById('frameMap').src=document.getElementById('frameMap').src.replace('&refine.statut=VOIE%20'+val, '');
		}
		else {
			document.getElementById('frameMap').src=document.getElementById('frameMap').src+'&refine.statut=VOIE%20'+val;
		}

	}

	$scope.setFilterPedestrian = function(){
		if (document.getElementById('frameMap').src.includes('&refine.statut=AIRE%20PIETONNE&refine.statut=ZONE%20DE%20RENCONTRE') ){
			document.getElementById('frameMap').src=document.getElementById('frameMap').src.replace('&refine.statut=AIRE%20PIETONNE&refine.statut=ZONE%20DE%20RENCONTRE', '');
		}
		else {
			document.getElementById('frameMap').src=document.getElementById('frameMap').src+'&refine.statut=AIRE%20PIETONNE&refine.statut=ZONE%20DE%20RENCONTRE';
		}
	}



	$scope.resetArd = function(){
		var url=document.getElementById('frameMap').src;
		//only refresh if url has changed
		if(url!=updateUrl(url,'refine.arrdt')){
			document.getElementById('frameMap').src=updateUrl(url,'refine.arrdt');
			$scope.ard='';
		}
	}

	$scope.enableZoom = function(){

		if (switcher===1) {
			document.getElementById('frameMap').src=updateUrl(document.getElementById('frameMap').src,'static','true');
		} else{
			document.getElementById('frameMap').src=updateUrl(document.getElementById('frameMap').src,'static','false');
		}

		switcher= switcher===0? 1 : 0;
	}

    // listener for arondissement filter
    $scope.$watch('ard', function(){
    	console.log(" change listened")
    	setArd($scope.ard);
    });

}]);




// filters arondissement
function setArd(val){
	if(val>0 && val<=20 && Number.isInteger(val)){

		if(document.getElementById('frameMap').src !== updateUrl(document.getElementById('frameMap').src,'refine.arrdt',val)){

			document.getElementById('frameMap').src=updateUrl(document.getElementById('frameMap').src,'refine.arrdt',val);

		}
		
	}
}




//update, add or delete key and paramaters in an URL

function updateUrl(url,key,value){
	if(value!=undefined){
		value = encodeURI(value);
	}
	var urls = url.split('?');
	var baseUrl = urls[0];
	var parameters = '';
	var outPara = {};
	if(urls.length>1){
		parameters = urls[1];
	}
	if(parameters!=''){
		parameters = parameters.split('&');
		for(k in parameters){
			var keyVal = parameters[k];
			keyVal = keyVal.split('=');
			var ekey = keyVal[0];
			var eval = '';
			if(keyVal.length>1){
				eval = keyVal[1];
			}
			outPara[ekey] = eval;
		}
	}

	if(value!=undefined){
		outPara[key] = value;
	}else{
		delete outPara[key];
	}
	parameters = [];
	for(var k in outPara){
		parameters.push(k + '=' + outPara[k]);
	}

	var finalUrl = baseUrl;

	if(parameters.length>0){
		finalUrl += '?' + parameters.join('&'); 
	}

	return finalUrl; 
}





