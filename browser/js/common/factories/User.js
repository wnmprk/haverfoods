app.factory('UserFactory', function($http, AuthService) {
    var userFactory = {};

    userFactory.getUser = function() {
        return AuthService.getLoggedInUser();
    }
    
    userFactory.getLikes = function () {
        return AuthService.getLoggedInUser()
        .then(function (user) {
            if (user) {
                return $http.get('/api/users/' + user._id + '/likes')
                .then(function (usersLikes) {
                    return usersLikes;
                });
            }
        });
    }
    
    userFactory.likeFood = function () {
        return AuthService.getLoggedInUser()
        .then(function (user) {
            if (user) {
                return $http.put('/api/users/' + user._id)
                .then(function () {
                    
                })
            }
        })
    }

    userFactory.unlikeFood = function () {
        
    }
    
    return userFactory;
});
