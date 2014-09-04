require.config({
  paths:{
    "jquery": "vendor/jquery/jquery.min",
    "angular": "vendor/angular/angular.min",
    "angularRoute": "vendor/angular-route/angular-route.min",
    "angular-resource": "vendor/angular-resource/angular-resource.min",
    
},
  
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-resource': { deps:['angular']},
    'angularRoute':{deps: ['angular']},
    'jquery': {'exports' : 'jquery'},
   
  }
});