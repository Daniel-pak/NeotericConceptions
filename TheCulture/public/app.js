angular.module("TheCultureApp", ["ngRoute"])

    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
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
