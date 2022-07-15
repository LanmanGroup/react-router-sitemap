module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _lib = __webpack_require__(1);

	Object.defineProperty(exports, 'default', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_lib).default;
		}
	});
	Object.defineProperty(exports, 'sitemapBuilder', {
		enumerable: true,
		get: function get() {
			return _lib.sitemapBuilder;
		}
	});
	Object.defineProperty(exports, 'routesParser', {
		enumerable: true,
		get: function get() {
			return _lib.routesParser;
		}
	});
	Object.defineProperty(exports, 'pathsFilter', {
		enumerable: true,
		get: function get() {
			return _lib.pathsFilter;
		}
	});
	Object.defineProperty(exports, 'paramsApplier', {
		enumerable: true,
		get: function get() {
			return _lib.paramsApplier;
		}
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.pathsSplitter = exports.sitemapBuilder = exports.paramsApplier = exports.pathsFilter = exports.routesParser = exports.routesCreater = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _routesCreater = __webpack_require__(2);

	Object.defineProperty(exports, 'routesCreater', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_routesCreater).default;
		}
	});

	var _routesParser = __webpack_require__(5);

	Object.defineProperty(exports, 'routesParser', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_routesParser).default;
		}
	});

	var _pathsFilter = __webpack_require__(7);

	Object.defineProperty(exports, 'pathsFilter', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_pathsFilter).default;
		}
	});

	var _paramsApplier = __webpack_require__(9);

	Object.defineProperty(exports, 'paramsApplier', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_paramsApplier).default;
		}
	});

	var _sitemapBuilder = __webpack_require__(15);

	Object.defineProperty(exports, 'sitemapBuilder', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_sitemapBuilder).default;
		}
	});

	var _pathsSplitter = __webpack_require__(17);

	Object.defineProperty(exports, 'pathsSplitter', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_pathsSplitter).default;
		}
	});

	var _fs = __webpack_require__(18);

	var _fs2 = _interopRequireDefault(_fs);

	var _path = __webpack_require__(19);

	var _path2 = _interopRequireDefault(_path);

	var _sitemap = __webpack_require__(16);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	var _routesCreater2 = _interopRequireDefault(_routesCreater);

	var _routesParser2 = _interopRequireDefault(_routesParser);

	var _pathsFilter2 = _interopRequireDefault(_pathsFilter);

	var _paramsApplier2 = _interopRequireDefault(_paramsApplier);

	var _pathsSplitter2 = _interopRequireDefault(_pathsSplitter);

	var _sitemapBuilder2 = _interopRequireDefault(_sitemapBuilder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class Sitemap
	 * @description Generate a sitemap using the [React Router](https://www.npmjs.com/package/react-router) configuration.
	 *
	 * @example
	 * import Sitemap from 'react-router-sitemap';
	 *
	 * const sitemap = (
	 *   new Sitemap(<Route path='/home'>)
	 *     .build('http://my-site.ru')
	 *     .save("./sitemap.xml");
	 * );
	 */
	var Sitemap = function () {

		/**
	  * @constructor
	  * @description Convert a React Router config to an array of paths.
	  * @param {Route} router - React Router configuration.
	  *
	  * @example
	  * import Sitemap from 'react-router-sitemap';
	  *
	  * const sitemap = new Sitemap(<Route path='/home'>);
	  */
		function Sitemap(router) {
			_classCallCheck(this, Sitemap);

			if (!router) {
				throw new Error('Need pass router in module');
			}

			var routes = (0, _routesCreater2.default)(router);

			this.paths = (0, _routesParser2.default)(routes);

			return this;
		}

		/**
	  * @description Filter paths using the specified rules.
	  * @param {Object} filterConfig - Filter configuration
	  * @property {Array<RegExp>} rules - List filter rules.
	  * @property {Boolean} isValid - Flag that defines a way to filter paths.
	  * If `true`, the path satisfying the rules will be included.
	  * If `false`, the path satisfying the rules will be excluded.
	  *
	  * @example
	  * <caption>Config for exclude `/auth` and `/thanks`</caption>
	  * { isValid: false, rules: [/\/auth/, /\/thanks/] }
	  *
	  * @example
	  * <caption>Config for include `/auth` and `/thanks`</caption>
	  * { isValid: true, rules: [/\/auth/, /\/thanks/] }
	  */


		_createClass(Sitemap, [{
			key: 'filterPaths',
			value: function filterPaths(filterConfig) {

				this.paths = (0, _pathsFilter2.default)(this.paths, filterConfig.rules, filterConfig.isValid || false);

				return this;
			}

			/**
	   * @description Replace the dynamic parameters in paths using the given values.
	   * @param {Object.<String, Array>} paramsConfig - Configuration for replacing params.
	   *
	   * @example
	   * <caption>Config for replacing params `:param` in the path `/path/:param`</caption>
	   * {
	   *   '/path/:param': [
	   *     { param: 'value' }
	   *   ]
	   * }
	   *
	   * @example
	   * <caption>Config for replacing params `:param` and `:subparam`
	   * in the path `/path/:param/:subparam`</caption>
	   * {
	   *   '/path/:param/:subparam': [
	   *     { param: 'value', subparam: ['subvalue1', 'subvalue2'] }
	   *   ]
	   * }
	   *
	   */

		}, {
			key: 'applyParams',
			value: function applyParams(paramsConfig) {
				this.paths = (0, _paramsApplier2.default)(this.paths, paramsConfig);
				return this;
			}

			/**
	   * @description Convert array of paths to sitemap.
	   * @param {String} hostname - The root name of your site.
	   */

		}, {
			key: 'build',
			value: function build(hostname) {
				var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
				    _ref$limitCountPaths = _ref.limitCountPaths,
				    limitCountPaths = _ref$limitCountPaths === undefined ? 49999 : _ref$limitCountPaths;

				this.hostname = hostname;
				this.splitted = (0, _pathsSplitter2.default)(this.paths, limitCountPaths);
				this.sitemaps = this.splitted.map(function (paths) {
					return (0, _sitemapBuilder2.default)(hostname, paths);
				});
				return this;
			}

			/**
	   * @description Save sitemaps and sitemap index in files.
	   * @param {String} dist - The path and file name where the sitemap index is saved.
	   * @param {String} publicPath - optional public path relative to hostname, default: '/'
	   */

		}, {
			key: 'save',
			value: function save(dist) {
				var _this = this;

				var publicPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

				var sitemapPaths = [];

				// sitemap index is not needed in case of one sitemap file
				if (this.sitemaps.length === 1) {
					// write sitemap
					_fs2.default.writeFileSync(dist, this.sitemaps[0].toString());

					return this;
				}

				this.sitemaps.map(function (sitemap, index) {
					var savePath = dist.replace('.xml', '-' + index + '.xml');

					// write sitemap
					_fs2.default.writeFileSync(savePath, sitemap.toString());

					// push public path for indexing
					sitemapPaths.push(_this.hostname + publicPath + _path2.default.basename(savePath));
				});

				// create index string
				var sitemapIndex = _sitemap2.default.buildSitemapIndex({
					urls: sitemapPaths,
					hostname: this.hostname
				});

				// write sitemap index
				_fs2.default.writeFileSync(dist, sitemapIndex);

				return this;
			}
		}]);

		return Sitemap;
	}();

	exports.default = Sitemap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _routeUtils = __webpack_require__(3);

	/**
	 * @description Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 * @param {Route} routes - React Router configuration.
	 * @return {Array<String>}
	 *
	 * @example
	 * import { routesCreater as createRoutes } from 'react-router-sitemap';
	 * import { routesParser as parseRoutes } from 'react-router-sitemap';
	 *
	 * const routes = createRoutes(<Route path='/home'>);
	 * const paths = parseRoutes(routes); // ['/home']
	 */
	var createRoutes = function createRoutes(routes) {
	  if ((0, _routeUtils.isReactChildren)(routes)) {
	    routes = (0, _routeUtils.createRoutesFromReactChildren)(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	};

	exports.default = createRoutes;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.createRoutesFromReactChildren = exports.isReactChildren = exports.isValidChild = undefined;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Use React method to test if is a valid React Element.
	 * @param {Object} object - Which to test if is valid React Element.
	 * @return {Boolean}
	 * @ignore
	 */
	var isValidChild = function isValidChild(object) {
		return object === null || _react2.default.isValidElement(object);
	};

	/**
	 * @param {Object|array}
	 * @return {Boolean}
	 * @ignore
	 */
	var isReactChildren = function isReactChildren(object) {
		return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	};

	/**
	 * @description Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 * @param {ReactChildren} children - ReactChildren in JSX
	 * @return {Object} routes object
	 * @ignore
	 */
	var createRoutesFromReactChildren = function createRoutesFromReactChildren(children) {
		var routes = [];

		/**
	  * @param {Object} element - ReactChild
	  * @return {Object} route object
	  * @ignore
	  */
		var createRouteFromReactElement = function createRouteFromReactElement(element) {
			var type = element.type;
			var route = Object.assign({}, type.defaultProps, element.props);

			if (route.children) {
				var childRoutes = createRoutesFromReactChildren(route.children, route);

				if (childRoutes.length) {
					route.childRoutes = childRoutes;
				}
				delete route.children;
			}

			return route;
		};

		_react2.default.Children.forEach(children, function (element) {
			if (_react2.default.isValidElement(element)) {
				// Component classes may have a static create* method.
				if (element.type.createRouteFromReactElement) {
					var route = element.type.createRouteFromReactElement(element);

					if (route) {
						routes.push(route);
					}
				} else {
					routes.push(createRouteFromReactElement(element));
				}
			}
		});

		return routes;
	};

	exports.isValidChild = isValidChild;
	exports.isReactChildren = isReactChildren;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pathBuilder = __webpack_require__(6);

	var _pathBuilder2 = _interopRequireDefault(_pathBuilder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Module for parsing the result of the `createRoutes(<Route>)` function.
	 * @module routesParser
	 * @param {Array|Object} [routes = []] Result of execute function
	 * `createRoutes(<Route>)`
	 * @param {String} [basePath = ''] Prefix for all paths
	 * @return {Array<String>} Array of paths
	 *
	 * @example
	 * import { routesCreater as createRoutes } from 'react-router-sitemap';
	 * import { routesParser as parseRoutes } from 'react-router-sitemap';
	 *
	 * const routes = createRoutes(<Route path='/home'>);
	 * const paths = parseRoutes(routes); // ['/home']
	 *
	 * @example
	 * import { routesCreater as createRoutes } from 'react-router-sitemap';
	 * import { routesParser as parseRoutes } from 'react-router-sitemap';
	 *
	 * const routes = createRoutes(<Route path='/home'>);
	 * const prefix = '/prefix';
	 * const paths = parseRoutes(routes, prefix); // ['/prefix/home']
	 */
	var parseRoutes = function parseRoutes() {
	  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


	  var isArrayOfRoutes = Array.isArray(routes);

	  if (!isArrayOfRoutes) {

	    var path = (0, _pathBuilder2.default)(basePath, routes.path);
	    var childRoutes = routes.childRoutes;
	    var hasChilds = childRoutes && childRoutes.length;

	    if (!hasChilds) {
	      return [path];
	    }

	    var childs = parseRoutes(childRoutes, path);

	    return [path].concat(childs);
	  }

	  return routes.reduce(function (result, route) {

	    var path = (0, _pathBuilder2.default)(basePath, routes.path);
	    var childs = parseRoutes(route, path);

	    return result.concat(childs);
	  }, []);
	};

	exports.default = parseRoutes;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function () {
		var baseRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var route = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		return ('/' + baseRoute + '/' + route).replace(new RegExp('\/+', 'g'), '/').replace(new RegExp('^.*?|\/$', 'g'), '');
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _paramsPreparer = __webpack_require__(8);

	var _paramsPreparer2 = _interopRequireDefault(_paramsPreparer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Module for filtering an array of paths.
	 * @function pathsFilter
	 * @param {Array<String>} [paths] Array of paths
	 * @param {Array<RegExp>} [rules] Filter rules
	 * @param {Boolean} [isValidRules] - Flag that defines a way to filter paths.
	 * If `true`, the path satisfying the rules will be included.
	 * If `false`, the path satisfying the rules will be excluded.
	 * @return {Array<String>} Array of paths.
	 *
	 * @example
	 *
	 * import { pathsFilter as filterPaths } from 'react-router-sitemap';
	 *
	 * const paths = ['/', '/home', '/auth'];
	 * const rules = [/\/auth/];
	 * const isValidRules = false;
	 *
	 * const paths = filterPaths(paths, rules, isValidRules);
	 * // ['/', '/home']
	 *
	 * @example
	 *
	 * import { pathsFilter as filterPaths } from 'react-router-sitemap';
	 *
	 * const paths = ['/', '/home', '/auth'];
	 * const rules = [/\/auth/];
	 * const isValidRules = true;
	 *
	 * const paths = filterPaths(paths, rules, isValidRules);
	 * // ['/auth']
	 */
	exports.default = function () {
	  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var isValidRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


	  var params = (0, _paramsPreparer2.default)(paths, rules);

	  paths = params.paths;
	  rules = params.rules;

	  return paths.filter(function (path, index) {

	    path = path.trim();

	    if (!path.length) {
	      return false;
	    }

	    var isUniq = paths.indexOf(path) === index;
	    var isValid = rules.some(function (regex) {
	      return regex.test(path);
	    }) === isValidRules;

	    return isUniq && isValid;
	  });
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function () {
		var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


		var isCorrectPaths = Array.isArray(paths);
		var isCorrectRules = Array.isArray(rules);

		if (!isCorrectPaths) {
			paths = typeof paths === 'string' ? [paths] : [];
		}

		if (!isCorrectRules) {
			rules = typeof rules === 'string' ? [rules] : [];
		}

		return { paths: paths, rules: rules };
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rulesApplier = __webpack_require__(10);

	var _rulesApplier2 = _interopRequireDefault(_rulesApplier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasRules = function hasRules() {
	  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var paramsConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  return !!paramsConfig[path];
	};

	/**
	 * Module for applying params in dynamic paths.
	 * @module paramsApplier
	 * @param {Array<String>} [paths] Array of paths
	 * @param {Object<String, Array>} [paramsConfig] Configuration matching parameters and values
	 * @return {Array<String>} Array of paths
	 * @example
	 *
	 * import { paramsApplier as applyParams } from 'react-router-sitemap';
	 *
	 * const paths = ['/path/:param'];
	 * const config = {
	 *   '/path:param': [
	 *     { param: 'a' },
	 *     { param: [ 'b', 'c' ] },
	 *   ],
	 * };
	 *
	 * const paths = applyParams(paths, config);
	 * // ['/path/a', '/path/b', '/path/c']
	 *
	 *  @example
	 *
	 * import { paramsApplier as applyParams } from 'react-router-sitemap';
	 *
	 * const paths = ['/path/:param/:subparam'];
	 * const config = {
	 *   '/path/:param/:subparam': [
	 *     { param: 'a', subparam: '1' },
	 *     { param: 'b', subparam: ['2', '3'] },
	 *   ],
	 * };
	 *
	 * const paths = applyParams(paths, config);
	 * // ['/path/a/1', '/path/b/2', '/path/b/3']
	 */

	exports.default = function () {
	  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var paramsConfig = arguments[1];


	  if (!paramsConfig) {
	    return paths;
	  }

	  return paths.reduce(function (result, path) {

	    if (!hasRules(path, paramsConfig)) {
	      return result.concat([path]);
	    }

	    return result.concat((0, _rulesApplier2.default)(path, paramsConfig[path]));
	  }, []);
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ruleApplier = __webpack_require__(11);

	var _ruleApplier2 = _interopRequireDefault(_ruleApplier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
		var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


		return rules.map(function (rule) {
			return (0, _ruleApplier2.default)(path, rule);
		}).reduce(function (result, item) {
			return result.concat(item);
		}, []).map(function (location) {
			// for each remaining (optional) param group that hasn't been removed, the optional group is removed from the location
			// /foo/bar(/:param) => /foo/bar
			location = location.replace(/\((.*:.*)\)/g, '');

			// remove other parenthesis that might be wrapping params that have been replaced
			// /foo(/:bar) => /foo(/bar-value) => /foo/bar-value
			location = location.replace(/(\(|\))/g, '');

			return location;
		});
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _paramsReplacer = __webpack_require__(12);

	var _paramsReplacer2 = _interopRequireDefault(_paramsReplacer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
		var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


		var params = Object.keys(rule);

		return (0, _paramsReplacer2.default)([path], params, rule);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _valuesApplier = __webpack_require__(13);

	var _valuesApplier2 = _interopRequireDefault(_valuesApplier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var replaceParams = function replaceParams() {
		var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


		if (!params.length) {
			return paths;
		}

		var param = params.shift();
		var values = rule[param];

		paths = (0, _valuesApplier2.default)(paths, param, values);

		return replaceParams(paths, params, rule);
	};

	exports.default = replaceParams;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _queryApplier = __webpack_require__(14);

	var _queryApplier2 = _interopRequireDefault(_queryApplier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
		var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
		var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];


		var query = new RegExp(':' + param);

		values = Array.isArray(values) ? values : [values];

		return values.map(function (value) {
			return (0, _queryApplier2.default)(paths, query, value);
		}).reduce(function (result, path) {
			return result.concat(path);
		});
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function () {
		var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
		var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

		return paths.map(function (path) {
			return path.replace(query, value);
		});
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _sitemap = __webpack_require__(16);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Module for building a sitemap using an array of paths. Uses the [sitemap](https://www.npmjs.com/package/sitemap) package.
	 * @module sitemapBuilder
	 * @param {String} [hostname] The root name of your site
	 * @param {Array<String>} [paths] Array of paths
	 * @return {Sitemap} instance of [Sitemap](https://www.npmjs.com/package/sitemap).
	 *
	 * @example
	 * import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
	 *
	 * const paths = ['/', 'home', '/contacts'];
	 * const hostname = 'http://may-site.ru';
	 * const sitemap = buildSitemap(hostname, paths);
	 */
	exports.default = function () {
	  var hostname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://localhost';
	  var paths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


	  return _sitemap2.default.createSitemap({
	    hostname: hostname,
	    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
	    urls: paths.map(function (path) {
	      return { url: path };
	    })
	  });
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("sitemap");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Module for splitting paths array in multiple arrays for support of large projects
	 * @module pathsSplitter
	 * @param {Array} [paths = []] Initial paths array (flattened)
	 * @param {Number} [size = 49999]
	 * @return {Array Array<String>} Array of Array of paths
	 *
	 * @example
	 * import { pathsSplitter } from 'react-router-sitemap';
	 *
	 * const splitted = pathsSplitter(paths, 49999); // 49999 because of Google sitemap limits
	 */

	var pathsSplitter = function pathsSplitter(paths, size) {
	  return paths.map(function (path, i) {
	    return i % size === 0 ? paths.slice(i, i + size) : null;
	  }).filter(function (e) {
	    return e;
	  });
	};

	exports.default = pathsSplitter;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ })
/******/ ]);