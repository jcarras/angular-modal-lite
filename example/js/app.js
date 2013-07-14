'use strict';

var app = angular.module('modalExampleApp', ['modal'])
.controller('mainCtrl', function ($scope, modal) {
    $scope.openModal = function () {
        modal.show("partials/modal-sample-partial.html", "TestModalCtrl");
    };

    $scope.openModalWithInlineCtrl = function () {
        modal.show("partials/modal-sample-partial2.html");
    };
})
.controller('TestModalCtrl', function ($scope, modal) {
    $scope.closeModal = function () {
        modal.hide();
    };
});


