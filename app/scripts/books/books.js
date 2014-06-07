/* global define */
define(function(require) {
  'use strict';

  var _ = require('lodash');
  var $ = require('velocityui');
  var angular = require('angular');
  var booksTemplate = require('text!./books.html');


  var books = angular.module('books', [])
    .directive('books', function() {
      return {
        restrict: 'E',
        template: booksTemplate,
        controller: function($scope) {
          var books = [{
            title: 'Consider Phlebas',
            imageSrc: '/images/considerphlebas.jfif',
            category: 'Sci-Fi'
          }, {
            title: 'The Hydrogen Sonata',
            imageSrc: '/images/thehydrogensonata.jfif',
            category: 'Sci-Fi'
          }, {
            title: 'The Player of Games',
            imageSrc: '/images/theplayerofgames.jfif',
            category: 'Sci-Fi'
          }, {
            title: 'Excession',
            imageSrc: '/images/excession.jfif',
            category: 'Sci-Fi'
          }, {
            title: 'Surface Detail',
            imageSrc: '/images/surfacedetail.jfif',
            category: 'Sci-Fi'
          }, {
            title: 'Use of Weapons',
            imageSrc: '/images/useofweapons.jfif',
            category: 'Sci-Fi'
          }];

          $scope.books = [];

          for (var i=0; i < 100; i++) {
            var j = Math.floor(Math.random() * 6);
            var book = {
              id: i
            };
            _.extend(book, books[j]);
            $scope.books.push(book);
          }

          $scope.cancelSearch = function() {
            $scope.searchText = '';
          };
        },
        link: function (scope, element) {
        }
      };
    })
    .directive('backImg', function() {
      return function(scope, element, attrs) {
        var url = attrs.backImg;
        element.css({
          'background-image': 'url(' + url + ')',
          'background-size': 'cover'
        });
      };
    });

  return books;
});
