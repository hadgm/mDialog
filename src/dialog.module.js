import angular from 'angular';
import './dialog.scss';
import DialogService from './DialogService.js';

var mDialog = angular.module('mDialog', [])
  .service('Dialog', DialogService)
  .name;

