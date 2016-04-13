(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["SideNav"] = factory(require("react"));
	else
		root["SideNav"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
	
	var _SideNav = __webpack_require__(1);
	
	Object.defineProperty(exports, 'SideNav', {
	  enumerable: true,
	  get: function get() {
	    return _SideNav.SideNav;
	  }
	});
	
	var _Nav = __webpack_require__(4);
	
	Object.defineProperty(exports, 'Nav', {
	  enumerable: true,
	  get: function get() {
	    return _Nav.Nav;
	  }
	});
	
	var _NavGroup = __webpack_require__(3);
	
	Object.defineProperty(exports, 'NavGroup', {
	  enumerable: true,
	  get: function get() {
	    return _NavGroup.NavGroup;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SideNav = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavGroup = __webpack_require__(3);
	
	var _NavGroup2 = _interopRequireDefault(_NavGroup);
	
	var _Nav = __webpack_require__(4);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _objectAssign = __webpack_require__(11);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SideNav = _react2.default.createClass({
	    displayName: 'SideNav',
	
	
	    propTypes: {
	        selected: _react.PropTypes.string,
	        navs: _react.PropTypes.array,
	        onSelection: _react.PropTypes.func,
	        children: _react.PropTypes.node,
	        navtype: _react.PropTypes.string,
	        navrenderer: _react.PropTypes.node
	    },
	
	    buildFromSettings: function buildFromSettings() {
	        var _this = this;
	
	        return this.props.navs.map(function (navkind) {
	            //nav kind could have a navlist, which we assume it contains a group of navs link
	            if (navkind.navlist) {
	                return _react2.default.createElement(_NavGroup2.default, { type: _this.props.navtype,
	                    key: navkind.id, selected: _this.props.selected, onClick: _this.onSubNavClick, nav: navkind });
	            } else {
	                return _react2.default.createElement(_Nav2.default, _extends({ type: _this.props.navtype,
	                    key: navkind.id, selected: _this.props.selected }, navkind, { onClick: _this.onClick }));
	            }
	        });
	    },
	    onSubNavClick: function onSubNavClick(group, child) {
	        var selection = { group: group, id: child };
	        this.setState({ selected: selection });
	        this.dispatchSelection(selection);
	    },
	    onClick: function onClick(id) {
	        this.dispatchSelection({ id: id });
	    },
	
	
	    dispatchSelection: function dispatchSelection(selection) {
	        if (this.props.onSelection) {
	            this.props.onSelection(selection);
	        }
	    },
	    buildChildren: function buildChildren() {
	        var _this2 = this;
	
	        if (this.props.navs) {
	            return this.buildFromSettings();
	        } else {
	            //we need to clone this or props aren't passed
	            return _react.Children.map(this.props.children, function (child) {
	                return (0, _react.cloneElement)(child, (0, _objectAssign2.default)({ key: child.props.id }, _this2.props));
	            });
	        }
	    },
	    render: function render() {
	
	        return _react2.default.createElement(
	            'div',
	            { style: { position: 'relative', width: '100%', color: '#FFF' } },
	            this.buildChildren()
	        );
	    }
	});
	exports.SideNav = SideNav;
	exports.default = SideNav;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NavGroup = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Nav = __webpack_require__(4);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(6);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var NavGroup = _react2.default.createClass({
	    displayName: 'NavGroup',
	
	
	    propTypes: {
	        onClick: _react.PropTypes.func,
	        selected: _react.PropTypes.any,
	        nav: _react.PropTypes.object,
	        children: _react.PropTypes.node,
	        id: _react.PropTypes.string,
	        type: _react.PropTypes.string
	    },
	
	    getInitialState: function getInitialState() {
	        return { collapsed: false };
	    },
	    buildChildren: function buildChildren() {
	        var _this = this;
	
	        if (this.props.nav) {
	            return this.props.nav.navlist.map(function (nav) {
	                return _react2.default.createElement(_Nav2.default, _extends({ type: _this.props.type, key: nav.id, selected: _this.props.selected, onClick: _this.onSubNavClick }, nav));
	            });
	        } else {
	            return this.props.children;
	        }
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({ selected: nextProps.selected });
	    },
	    onSubNavClick: function onSubNavClick(id) {
	        if (this.props.onClick) {
	            this.props.onClick(this.props.id, id);
	        }
	    },
	    onClick: function onClick() {
	        this.setState({ collapsed: !this.state.collapsed });
	    },
	    componentDidMount: function componentDidMount() {
	        //we cant transition 0 height to auto height.. so below is the result
	        if (!this.__computedHeight) {
	            var cloned = this.refs.cont.cloneNode(true);
	            cloned.style.position = 'absolute';
	            cloned.style.left = '-9999px';
	            cloned.style.height = 'auto';
	            document.body.appendChild(cloned);
	            this.__computedHeight = cloned.clientHeight;
	            document.body.removeChild(cloned);
	        }
	    },
	    render: function render() {
	
	        var itemsClassnames = (0, _classnames2.default)(_style2.default['rui-snav-items']);
	        var groupClassnames = (0, _classnames2.default)(_style2.default['rui-snav-grp'], _defineProperty({}, _style2.default['rui-snav-collapsed'], this.state.collapsed));
	
	        var styles = {
	            height: this.state.collapsed ? this.__computedHeight : 0
	        };
	
	        var Item = _Nav.ITEM_MAP[this.props.type || 'icon-left'];
	
	        return _react2.default.createElement(
	            'div',
	            { className: _style2.default['rui-snav-grp-c'] },
	            _react2.default.createElement(
	                'div',
	                { onClick: this.onClick, className: groupClassnames },
	                _react2.default.createElement(Item, { icon: 'fa fa-chevron-down', text: this.props.nav.text })
	            ),
	            _react2.default.createElement(
	                'div',
	                { ref: 'cont', style: styles, className: itemsClassnames },
	                this.buildChildren()
	            )
	        );
	    }
	});
	exports.NavGroup = NavGroup;
	exports.default = NavGroup;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Nav = exports.isActive = exports.ITEM_MAP = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(6);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _Items = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ITEM_MAP = exports.ITEM_MAP = {
	    'icon-left': _Items.IconLeft,
	    'icon-right': _Items.IconRight
	};
	
	var isActive = exports.isActive = function isActive(props) {
	    return props.selected && props.selected === props.id;
	};
	var Nav = _react2.default.createClass({
	    displayName: 'Nav',
	
	
	    propTypes: {
	        onClick: _react.PropTypes.func,
	        id: _react.PropTypes.string.isRequired,
	        text: _react.PropTypes.string.isRequired,
	        selected: _react.PropTypes.string,
	        type: _react.PropTypes.string,
	        navrenderer: _react.PropTypes.node
	    },
	
	    itemClicked: function itemClicked() {
	
	        if (this.props.onClick) {
	            this.props.onClick(this.props.id);
	        }
	    },
	    render: function render() {
	        var type = this.props.type;
	
	
	        var Item = (ITEM_MAP[type] ? ITEM_MAP[type] : this.props.navrenderer) || _Items.IconLeft;
	
	        var classes = (0, _classnames2.default)(_style2.default['sidenav-item'], _defineProperty({}, _style2.default['active'], isActive(this.props)));
	        return _react2.default.createElement(
	            'div',
	            { onClick: this.itemClicked, className: classes },
	            _react2.default.createElement(Item, this.props)
	        );
	    }
	});
	exports.Nav = Nav;
	//{this.createIconTextContent()}
	
	exports.default = Nav;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	function classNames() {
		var classes = '';
		var arg;
	
		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}
	
			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}
	
	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}
	
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?localIdentName=[name]_[local]_[hash:base64:5]!./../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?localIdentName=[name]_[local]_[hash:base64:5]!./../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".style_rui-snav-grp_OgHHH {\n  cursor: pointer;\n  border-left: 4px solid transparent;\n  padding: 12px 10px;\n  font-weight: bold;\n}\n.style_sidenav-item_1ECTt {\n  cursor: pointer;\n  border-left: 4px solid transparent;\n  font-weight: bold;\n  padding: 12px 10px;\n}\n.style_active_1bLoa {\n  background: #1abc9c;\n  border-left: 4px solid #117964;\n}\n\n.style_sidenav-item_1ECTt:hover {\n  background: #1abc9c !important;\n}\n\n.style_rui-snav-grp_OgHHH:hover {\n  background: #2c3e50;\n}\n.style_rui-snav-items_2hyGY {\n  overflow: hidden;\n  transition: height 0.15s ease-out;\n}\n.style_rui-snav-grp-c_3AfFK > .style_sidenav-item_1ECTt {\n  padding-left: 32px;\n}\n\n.style_rui-snav-collapsed_3O2xO {\n    border-left: 4px solid #117964;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"rui-snav-grp": "style_rui-snav-grp_OgHHH",
		"sidenav-item": "style_sidenav-item_1ECTt",
		"active": "style_active_1bLoa",
		"rui-snav-items": "style_rui-snav-items_2hyGY",
		"rui-snav-grp-c": "style_rui-snav-grp-c_3AfFK",
		"rui-snav-collapsed": "style_rui-snav-collapsed_3O2xO"
	};

/***/ },
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IconRight = exports.IconLeft = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IconLeft = exports.IconLeft = function IconLeft(props) {
	    var icon = props.icon;
	    var text = props.text;
	    var id = props.id;
	
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('span', { key: id + '-icn', style: { paddingRight: 10 },
	            className: icon }),
	        _react2.default.createElement(
	            'span',
	            { key: props.id + '-txt' },
	            text
	        )
	    );
	};
	
	var IconRight = exports.IconRight = function IconRight(props) {
	    var icon = props.icon;
	    var text = props.text;
	    var id = props.id;
	
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'span',
	            null,
	            text
	        ),
	        _react2.default.createElement(
	            'div',
	            { style: { float: 'right', display: 'inline-block', paddingRight: 2 } },
	            _react2.default.createElement('span', { key: id + '-icn', style: { paddingRight: 10 },
	                className: icon })
	        )
	    );
	};
	
	var propTypes = {
	    text: _react.PropTypes.string,
	    id: _react.PropTypes.string,
	    icon: _react.PropTypes.string
	};
	
	IconLeft.propTypes = propTypes;
	IconRight.propTypes = propTypes;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-sidenav.js.map