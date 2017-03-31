angular.module("TheCultureApp")

    .service("BlogService", ['$http', function ($http) {

        this.getAllBlogs = function () {
            return $http.get('/blog')
        }
        
        this.getOneBlog = function(id){ 
            return $http.get(`/blog/:id`)
        }

}])
