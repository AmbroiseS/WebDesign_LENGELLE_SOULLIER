var app1=angular.module("mapApp",[])

var switcher=0;




app1.controller("switchButtons",['$scope', function($scope){
	
	$scope.enableZoom= function(){
		console.log(switcher);
		if (switcher===1) {
			document.getElementById('frameMap').src=updateUrl(document.getElementById('frameMap').src,'static','true');
		} else{
			document.getElementById('frameMap').src=updateUrl(document.getElementById('frameMap').src,'static','false');

		}

		switcher= switcher===0? 1 : 0;
	}

}]);




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





