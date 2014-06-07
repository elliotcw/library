/* global define */
define(function (require) {
  'use strict';

  var angular = require('angular');

  require('./books/books');

  var app = angular.module('library', ['books']);

  return app;
});