(function(){
    function MainCtrl($location) {
        this.$location = $location;
    }

    angular.module('angularAsessment').controller('MainCtrl', MainCtrl);

})();