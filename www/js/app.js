angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'ngOpenFB'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).run(function ($ionicPlatform, ngFB) {
  ngFB.init({appId: '442077709317313'});
})