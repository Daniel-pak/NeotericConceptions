angular.module("TheCultureApp")

    .controller("BlogController", ['$scope', function ($scope) {

            $scope.blogs = [{
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit qui accusamus, id sunt ipsa iusto, ullam nostrum! Illum ad vel iure, assumenda cum sed impedit pariatur reiciendis incidunt blanditiis, enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, id minus est tenetur! Veniam voluptatibus fugit cum eos laborum odit aperiam natus illo aliquid explicabo distinctio nulla, maiores culpa tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit vero hic, cum explicabo ipsum eligendi magnam animi quod, doloremque ducimus modi, maxime autem illum! Deserunt nam accusamus enim, odio aspernatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sint tempore provident inventore officia dignissimos mollitia fugit aspernatur eius dolorem ipsum sed temporibus, quisquam impedit pariatur obcaecati ut numquam perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nisi quae expedita totam soluta in eligendi labore vero. Aspernatur quas, delectus mollitia possimus fugiat! Tenetur debitis, magni voluptatibus porro cw",
                title: "testing"
            }]

            $scope.featured = {
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit qui accusamus, id sunt ipsa iusto, ullam nostrum! Illum ad vel iure, assumenda cum sed impedit pariatur reiciendis incidunt blanditiis, enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, id minus est tenetur! Veniam voluptatibus fugit cum eos laborum odit aperiam natus illo aliquid explicabo distinctio nulla, maiores culpa tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit vero hic, cum explicabo ipsum eligendi magnam animi quod, doloremque ducimus modi, maxime autem illum! Deserunt nam accusamus enim, odio aspernatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sint tempore provident inventore officia dignissimos mollitia fugit aspernatur eius dolorem ipsum sed temporibus, quisquam impedit pariatur obcaecati ut numquam perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nisi quae expedita totam soluta in eligendi labore vero. Aspernatur quas, delectus mollitia possimus fugiat! Tenetur debitis, magni voluptatibus porro cw",
                title: "testing"
            }

            $scope.ellipsify = function(str) {
                if (str.length > 20) {
                    return (str.substring(0, 20) + "...");
                } else {
                    return str;
                }
            }
            
            $scope.featuredEllipsify = function(str) {
                if (str.length > 50) { 
                    return (str.subsring(0, 50) + "...");
                } else { 
                    return str;
                }
            } //broken
            
            $scope.openBlogPost = function(index) { 
                
            }
        
}




     //sort out the first one set it as a variable on load $scope.featured; 
     //set the rest of the $scope.blogs as an array;



])
