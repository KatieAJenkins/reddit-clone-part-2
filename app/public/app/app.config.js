(function() {
  'use strict'
  console.log('Connected!')

  angular
    .module("app", ['ui.router' , 'post.component'])
    .config(config)

    config.$inject = ['$stateProvider' , '$urlRouterProvider' , '$locationProvider']

    function config ($stateProvider , $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'post',
        url: '/',
        component: 'postArea'
      })

    };
}());
