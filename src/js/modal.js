/* AngularJS Modal Lite v0.0.1
 * Author: Joel Carras */
var dialogModule = angular.module('modal', []);

dialogModule.factory('modal', function ($document, $http, $templateCache, $controller, $rootScope, $compile) {
    var modalEl, modalShown, $scope, ctrl;
    return {
        show: function (templateURL, controller) {
            if(!templateURL){
                throw new Error("Dang, did you template fall off a cliff? Please provide the template URL for your modal content.");
            };
            if (!modalShown) {
                modalShown = true;
                $http.get(templateURL, {cache: $templateCache})
                    .then(function (response) {
                        modalEl = angular.element("<div>");
                        modalEl[0].innerHTML = "<div class='modal-lite-background'></div><div class='modal-lite-content'>" + response.data + "</div>";
                        modalEl.addClass("modal-lite fadeIn");
                        $scope = $rootScope.$new();
                        if (controller) {
                            ctrl = $controller(controller, {$scope: $scope});
                            modalEl.children().data(controller, ctrl);
                        };
                        $compile(modalEl)($scope);
                        var body = $document.find('body');
                        body.append(modalEl);
                    });
            };
        },
        hide: function () {
            modalShown = false;
            modalEl.remove();
        }
    }
});

