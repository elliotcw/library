require.config({
  shim: {
    jquery: {
      exports: '$'
    },
    velocity: {
      deps: ['jquery'],
      exports: '$'
    },
    velocityui: {
      deps: ['velocity'],
      exports: '$'
    },
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    }
  },
  paths: {
    d3: '../bower_components/d3/d3',
    jquery: '../bower_components/jquery/dist/jquery',
    text: '../bower_components/requirejs-text/text',
    velocity: '../bower_components/velocity/jquery.velocity',
    velocityui: '../bower_components/velocity/velocity.ui',
    angular: '../bower_components/angular/angular',
    lodash: '../bower_components/lodash/dist/lodash'
  }
});

require(['angular', './app'], function(angular) {
  'use strict';

  angular.bootstrap(document, ['library']);
});
