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
        $http.post('/login/', admin).then(function(response){
           $localStorage.user = response.data;
        });
        $location.path('/home');
    }
    
}])

.service("TokenService", ['$localStorage', function($localStorage){

    this.setToken = function(token) {
        $localStorage.token = token;
    };

    this.getToken = function() {
        return $localStorage.token;
    };

    this.removeToken = function() {
        delete $localStorage.token;
    };

    this.isAuthenticated = function() {
        return !!$localStorage.token;
    };

}])