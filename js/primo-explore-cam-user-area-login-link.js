app.controller('PrmUserAreaAfterController', ['$http', '$mdDialog', '$scope', function ($http, $mdDialog, $scope) {
    var vm = this;

    var unregisterUserName = $scope.$watch(function () {
        return document.getElementsByClassName('user-name');
    }, function (spans) {
        for (var i = 0; i < spans.length; i++) {
            if (spans[i].innerHTML === 'Guest') {
                spans[i].innerHTML = 'Login to iDiscover';
                unregisterUserName();
            }
        }
    });
}]);

app.component('prmUserAreaAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'PrmUserAreaAfterController',
    template: '<div ></div>'
});
