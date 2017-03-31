<<<<<<< HEAD
angular.module("TheCultureApp", ["ngRoute"])
=======
angular.module("TheCultureApp", ['ngRoute'])
>>>>>>> master

    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/dashboard', {
            controller: "HomeController",
            templateUrl: "views/dashboard/dashboard.html"
        })
            .when('/home', {
                controller: "HomeController",
                templateUrl: "home/home.html"
            })
            .when('/blog', {
                controller: "BlogController",
                templateUrl: "blog/blog.html"
            })
            .when('/podcast', {
                controller: "PodcastController",
                templateUrl: "podcasts/podcasts.html"
            })
//            .when('/blog/:id', {
//                controller: "BlogPostDetailController", 
//                templateUrl: "blogDetail/blogDetail.html"
//            })
    }]);
