import angular from 'angular';
import './dialog.scss';
import DialogService from './DialogService.js';

let mDialog = angular.module('mDialog', [])
  .service('Dialog', DialogService)
  .name;

export default mDialog;
