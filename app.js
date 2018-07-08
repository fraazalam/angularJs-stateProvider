
var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/views/about.html',
            controller: 'AboutController',
            controllerAs: 'about'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/views/contact.html',
            controller: 'ContactController',
            controllerAs: 'contact'
        });

});

