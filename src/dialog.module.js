/*global angular*/

import './dialog.scss';
import DialogService from './DialogService.js';

export default angular.module('dialog', [])
  .service('Dialog', DialogService)
  .name;
