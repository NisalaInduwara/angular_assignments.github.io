(function(){
    'use scripts';

    angular.module('LaunchCheckerApp', [])
    .controller('LaunchCheckController', LaunchCheckController);

    LaunchCheckController.$inject = ['$scope']

    function LaunchCheckController($scope){
        $scope.items = "";
        $scope.message = "";

        $scope.displayMessage = function () {
            $scope.message = CheckItemsLength($scope.items)
        };

        function CheckItemsLength(input){
            var message = '';
            var items = [];
            items = input.split(',');
            
            items = items.filter(function (item) {
                return item.trim() !== '';
            });

            if (items.length > 3){
                message = 'Too much!'

            } else if(items.length == 0){
                message = 'Please enter data first'
            } else{
                message = 'Enjoy!'
            }

            return message
            
        };
    }
}())