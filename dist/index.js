(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["mDialog"] = factory(require("angular"));
	else
		root["mDialog"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(2);

	var _DialogService = __webpack_require__(6);

	var _DialogService2 = _interopRequireDefault(_DialogService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mDialog = _angular2.default.module('mDialog', []).service('Dialog', _DialogService2.default).name;

	exports.default = mDialog;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/sass-loader/index.js?sourceMap!./dialog.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/sass-loader/index.js?sourceMap!./dialog.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".dialog-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(38, 38, 38, 0.95);\n  z-index: 10; }\n\n.dialog-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.dialog-pane {\n  width: 50%;\n  max-width: 40em;\n  background: #fff;\n  min-height: 5em;\n  box-shadow: 0px 10px 35px 2px rgba(0, 0, 0, 0.6);\n  border-radius: 3px; }\n\n.dialog__header {\n  background-color: #cccccc; }\n  .dialog__header .dialog__header__inner {\n    padding: 1em; }\n  .dialog__header h2, .dialog__header h3 {\n    margin-bottom: 1rem; }\n\n.dialog__footer {\n  border-top: 1px solid #e6e6e6;\n  padding: 0.5em;\n  min-height: 2em;\n  display: flex;\n  align-items: center; }\n\n.dialog__body {\n  padding: 1em; }\n\nform {\n  margin: 0; }\n", "", {"version":3,"sources":["/./src/dialog.scss"],"names":[],"mappings":"AAEA;EACE,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,aAAa;EACb,YAAY;EACZ,yCAAgC;EAChC,YAAY,EACb;;AAED;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,oBAAoB,EACrB;;AACD;EACE,WAAW;EACX,gBAAgB;EAChB,iBAvBU;EAwBV,gBAAgB;EAChB,iDAA4C;EAC5C,mBAAmB,EACpB;;AAGD;EACE,0BAHuB,EAaxB;EAXD;IAII,aAAa,EACd;EALH;IAQI,oBAAoB,EACrB;;AAGH;EACE,8BAA4B;EAC5B,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,oBAAoB,EACrB;;AACD;EACE,aAAa,EACd;;AAED;EACE,UAAU,EACX","file":"dialog.scss","sourcesContent":["$white: #fff;\n\n.dialog-backdrop{\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: transparentize(darken($white, 85%), 0.05);\n  z-index: 10;\n}\n\n.dialog-container{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.dialog-pane{\n  width: 50%;\n  max-width: 40em;\n  background: $white;\n  min-height: 5em;\n  box-shadow: 0px 10px 35px 2px transparentize(darken($white, 100%), 0.4);\n  border-radius: 3px;\n}\n$dialog-header-bg: darken($white, 20%);\n\n.dialog__header{\n  background-color: $dialog-header-bg;\n\n  .dialog__header__inner {\n    padding: 1em;\n  }\n\n  h2, h3 {\n    margin-bottom: 1rem;\n  }\n\n}\n.dialog__footer{\n  border-top: 1px solid darken($white, 10%);\n  padding: 0.5em;\n  min-height: 2em;\n  display: flex;\n  align-items: center;\n}\n.dialog__body {\n  padding: 1em;\n}\n\nform{\n  margin: 0;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _backdropTpl = __webpack_require__(7);

	var _backdropTpl2 = _interopRequireDefault(_backdropTpl);

	var _containerTpl = __webpack_require__(8);

	var _containerTpl2 = _interopRequireDefault(_containerTpl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DialogService = (function () {
	  function DialogService($compile, $q, $rootScope, $http, $templateCache, $injector, $controller, $document, $log) {
	    _classCallCheck(this, DialogService);

	    this.$compile = $compile;
	    this.$q = $q;
	    this.$rootScope = $rootScope;
	    this.$http = $http;
	    this.$templateCache = $templateCache;
	    this.$injector = $injector;
	    this.$controller = $controller;
	    this.$document = $document;
	    this.$log = $log;

	    this._backdrop = angular.element(_backdropTpl2.default);
	    this._container = angular.element(_containerTpl2.default);
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

	  _createClass(DialogService, [{
	    key: 'open',
	    value: function open(options) {
	      var _this = this;

	      options = options || {};

	      var dialogPrommise = this.$q(function (resolve, reject) {
	        var dialogScope = options.scope || _this.$rootScope.$new();
	        var dialogElm;
	        var ctrlInstance;
	        var allPromises = _this.$q.all(_this.resolve(options).concat([_this.getTemplate(options)]));

	        var $dialog = {
	          close: function close(result) {
	            dialogElm.remove();
	            resolve(result);
	          },

	          dismiss: function dismiss(reason) {
	            dialogElm.remove();
	            reject(reason);
	          }
	        };

	        dialogScope.$close = function (result) {
	          dialogElm.remove();
	          resolve(result);
	        };

	        dialogScope.$dismiss = function (reason) {
	          dialogElm.remove();
	          reject(reason);
	        };

	        allPromises.then(function (results) {
	          var templateString = results.pop();
	          var ctrlLocals = {};
	          var iter = 0;
	          angular.forEach(options.resolve, function (task, taskName) {
	            ctrlLocals[taskName] = results[iter];
	          });

	          ctrlLocals.$dialog = $dialog;

	          ctrlInstance = _this.$controller(options.controller, ctrlLocals);
	          var defaultCtrlAs = undefined;
	          if (typeof options.controller === 'function') {
	            defaultCtrlAs = options.controller.name;
	          } else {
	            defaultCtrlAs = options.controller || '';
	          }

	          defaultCtrlAs = defaultCtrlAs.substring(0, defaultCtrlAs.indexOf('Controller'));
	          if (defaultCtrlAs[0]) {
	            defaultCtrlAs = defaultCtrlAs[0].toLowerCase() + defaultCtrlAs.substring(1);
	          }

	          var ctrlAs = options.controllerAs || defaultCtrlAs;
	          if (ctrlAs) {
	            dialogScope[ctrlAs] = ctrlInstance;
	          }

	          // wrap it
	          var wrapper = angular.element('<div class="dialog-pane"></div>');
	          wrapper.html(templateString);
	          var templateFn = _this.$compile(wrapper);
	          dialogElm = templateFn(dialogScope);
	          _this._container.append(dialogElm);
	          angular.element(document.body).append(_this._backdrop);
	        });
	      });

	      return dialogPrommise.then(function (results) {
	        _this._container.empty();
	        _this._backdrop.remove();
	        return results;
	      }).catch(function (reason) {
	        _this._container.empty();
	        _this._backdrop.remove();
	        return _this.$q.reject(reason);
	      });
	    }
	  }, {
	    key: 'getTemplate',
	    value: function getTemplate(options) {
	      if (options.template) return this.$q.when(options.template);
	      var templateUrl = angular.isFunction(options.templateUrl) ? options.templateUrl() : options.templateUrl;
	      return this.$http.get(templateUrl, {
	        cache: this.$templateCache
	      }).then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'resolve',
	    value: function resolve(options) {
	      var _this2 = this;

	      var promises = [];
	      angular.forEach(options.resolve, function (task) {
	        if (angular.isFunction(task) || angular.isArray(task)) {
	          promises.push(_this2.$injector.invoke(task));
	        } else {
	          promises.push(_this2.$q.when(task));
	        }
	      });

	      return promises;
	    }
	  }, {
	    key: 'confirm',
	    value: function confirm(_message) {
	      // convinient yes - no confirm dialog. For those who lazy
	      this.open({
	        templateUrl: 'sc',
	        resolve: {
	          message: function message() {
	            return _message;
	          }
	        }
	      });
	    }
	  }]);

	  return DialogService;
	})();

	DialogService.$inject = ['$compile', '$q', '$rootScope', '$http', '$templateCache', '$injector', '$controller', '$document', '$log'];

	exports.default = DialogService;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dialog-backdrop\">\n</div>\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dialog-container\"></div>\n"

/***/ }
/******/ ])
});
;