angular.module("TheCultureApp.Auth", ['ngStorage'])

.config(["$routeProvider", function($routeProvider) { 
    $routeProvider
        .when("/admin/login", { 
            controller: "LoginAdminController", 
            templateUrl: "login/login.html"
        })
    

}])

.service("UserService", ['$http', '$location', '$localStorage', function($http, $location, $localStorage) {
    
    this.loginAdmin = function(admin) { 
        $http.post('/login/')
    }
    
}])