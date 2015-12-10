import backdropTpl from './backdrop.tpl.html';
import containerTpl from './container.tpl.html';

class DialogService {
  constructor($compile, $q, $rootScope, $http, $templateCache, $injector, $controller, $document, $log) {
    this.$compile = $compile;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$http = $http;
    this.$templateCache = $templateCache;
    this.$injector = $injector;
    this.$controller = $controller;
    this.$document = $document;
    this.$log = $log;

    this._backdrop = angular.element(backdropTpl);
    this._container = angular.element(containerTpl);
    this._backdrop.append(this._container);
  }

  /**
   * open dialog
   * @param  {object} options
   * @typedef dialogOptions
   * @property {string} template
   * @property {string} templateUrl
   * @property {object} resolve
   * @property {array|function} controller
   * @property {string} controllerAs
   * @return {[type]}
   */
  open(options) {
    options = options || {};

    var dialogPrommise = this.$q((resolve, reject) => {
      var dialogScope = options.scope || this.$rootScope.$new();
      var dialogElm;
      var ctrlInstance;
      let allPromises = this.$q.all(
        this.resolve(options)
        .concat([this.getTemplate(options)])
      );

      var $dialog = {
        close: function(result) {
          dialogElm.remove();
          resolve(result);
        },

        dismiss: function(reason) {
          dialogElm.remove();
          reject(reason);
        },
      };

      dialogScope.$close = (result) => {
        dialogElm.remove();
        resolve(result);
      };

      dialogScope.$dismiss = (reason) => {
        dialogElm.remove();
        reject(reason);
      };

      allPromises.then(results => {
        var templateString = results.pop();
        var ctrlLocals = {};
        let iter = 0;
        angular.forEach(options.resolve, (task, taskName) => {
          ctrlLocals[taskName] = results[iter];
        });

        ctrlLocals.$dialog = $dialog;

        ctrlInstance = this.$controller(options.controller, ctrlLocals);
        let defaultCtrlAs;
        if (typeof options.controller === 'function') {
          defaultCtrlAs = options.controller.name;
        } else {
          defaultCtrlAs = options.controller || '';
        }

        defaultCtrlAs = defaultCtrlAs.substring(0, defaultCtrlAs.indexOf('Controller'));
        if (defaultCtrlAs[0]) {
          defaultCtrlAs = defaultCtrlAs[0].toLowerCase() +
                            defaultCtrlAs.substring(1);
        }

        let ctrlAs = options.controllerAs || defaultCtrlAs;
        if (ctrlAs) {
          dialogScope[ctrlAs] = ctrlInstance;
        }

        // wrap it
        let wrapper = angular.element('<div class="dialog-pane"></div>');
        wrapper.html(templateString);
        var templateFn = this.$compile(wrapper);
        dialogElm = templateFn(dialogScope);
        this._container.append(dialogElm);
        angular.element(document.body).append(this._backdrop);
      });
    });

    return dialogPrommise
      .then((results) => {
        this._container.empty();
        this._backdrop.remove();
        return results;
      })

      .catch((reason)=> {
        this._container.empty();
        this._backdrop.remove();
        return this.$q.reject(reason);
      });
  }

  getTemplate(options) {
    if (options.template) return this.$q.when(options.template);
    let templateUrl = angular.isFunction(options.templateUrl) ? options.templateUrl() : options.templateUrl;
    return this.$http
      .get(templateUrl, {
        cache: this.$templateCache,
      })

      .then(response => response.data);
  }

  resolve(options) {
    var promises = [];
    angular.forEach(options.resolve, task => {
      if (angular.isFunction(task) || angular.isArray(task)) {
        promises.push(this.$injector.invoke(task));
      } else {
        promises.push(this.$q.when(task));
      }
    });

    return promises;
  }

  confirm(message) {
    // convinient yes - no confirm dialog. For those who lazy
    this.open({
      templateUrl: 'sc',
      resolve: {
        message: function() {
          return message;
        },
      },
    });
  }
}

DialogService.$inject = [
  '$compile',
  '$q',
  '$rootScope',
  '$http',
  '$templateCache',
  '$injector',
  '$controller',
  '$document',
  '$log',
];

export default DialogService;
