(function() {
  'use strict';
  // console.log('App Config Connected!');

  angular
    .module("app", ['ui.router' , 'post.component', 'comment.component'])
    // .module("app");
    .config(config);

    config.$inject = ['$stateProvider' , '$urlRouterProvider' , '$locationProvider'];

    function config ($stateProvider , $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'post',
        url: '/',
        component: 'post'
      })
      .state({
        name: 'comment',
        url: '/',
        component: 'comment'
      });
    }
}());
