angular.module("TheCultureApp", [])

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
//            .when('/blog/:id', {
//                controller: "BlogPostDetailController", 
//                templateUrl: "blogDetail/blogDetail.html"
//            })
}])
