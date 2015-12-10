import angular from 'angular';
import './dialog.scss';
import DialogService from './DialogService.js';

export default angular.module('mDialog', [])
  .service('Dialog', DialogService)
  .name;
