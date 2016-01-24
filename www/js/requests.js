angular.module('starter.requests', ['ngResource', 'starter.config'])

    // Routes
    .config(function ($stateProvider) {

        $stateProvider

            .state('app.requests', {
                url: "/requests",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/requests.html",
                        controller: "RequestsListCtrl"
                    }
                }
            })

            .state('app.request', {
                url: "/requests/:requestId",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/request.html",
                        controller: "RequestCtrl"
                    }
                }
            })

    })

    .factory('Request', function ($resource, SERVER_PATH) {
        return $resource(SERVER_PATH + '/requests/:requestId');
    })

    .controller('RequestsListCtrl', function ($scope, Request, SERVER_PATH) {
        $scope.serverPath = SERVER_PATH;
        $scope.requests = Request.query();
    })

    .controller('RequestCtrl', function ($scope, $stateParams, Request, SERVER_PATH) {
        $scope.serverPath = SERVER_PATH;
        $scope.request = Request.get({requestId: $stateParams.requestId});

        $scope.push = function(event) {
            // TODO add information in the request
            Notification.push({message: "Check out this request: " + $scope.request.distance});
        }

    });