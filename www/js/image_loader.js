angular.module('imageLoader', ['ngAnimate'])


.directive('downloadImg', ['$compile', 'loadImage', '$timeout', function ($compile, loadImage) {
        'use strict';

        return {
            scope: { // isoladed scope
            },
            
            controller: function($scope) {
                $scope.img_loading = true; // variable(flag) for control loader 
            },
            
            link: function ($scope, elem, attrs) {
                //--- initialize  image data --- //
                var imgUrl = attrs.downloadImg; // atrribute(url) from directive downloadImage 

                console.log("scope",$scope)
                //---Image Rendering ---//
                var renderImage = function () {
                    var imageTeg = loadImage.getImages(imgUrl); // get html tamplate loader and image
                    var el = angular.element(imageTeg);

                    elem.empty();
                    elem.prepend(el);
                    var compiled = $compile(el);
                    compiled($scope);
                }
                // run render
                renderImage();

            }
           
        };

}])


.directive('imagePreload', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            scope: {
                ngSrc: '@', //  isolate src 
                imageLoading: '=' // link to 
            },
            link: function (scope, element, attrs) {
                element.on('load', function () { // wait loading image

                    scope.imageLoading = false;

                    element.addClass('in');
                    scope.$apply();

                }).on('error', function () {
                    scope.imageLoading = false;
                });

                scope.$watch('ngSrc', function (newVal) {
                    scope.imageLoading = true;

                    element.removeClass('in');
                });
            }
                
        };
}])



.service('loadImage', function ($location, $http, $q) {
// generation tamplate
    this.getImages = function (imgUrl) {

        var loaderHTML = '<div data-ng-if="img_loading" class="loader"><div class="spinner"><div class="cube1"></div>' +
            '<div class="cube2"></div></div></div>';

        var imageHTML = '<img style="width:100%;" image-preload image-loading="img_loading" class="fade" ng-src="' + imgUrl + '">';

        return loaderHTML + imageHTML;
        console.log('Service started');

    }
})
