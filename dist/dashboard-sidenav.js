(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["SideNav"] = factory(require("React"));
	else
		root["SideNav"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

	/** @jsx React.DOM */
	/*globals require,module */
	/* jshint -W097 */
	"use strict";

	var React = __webpack_require__(1);

	/**
	 * Creates a side navigator which can automatically trigger events+change history nagivation etc
	 *
	 * //sidenav could be dynamically generated depending on user role for example
	 * var navigation = [
	 *    { group: 'main', nav : [
	 *      {id: 'landing', title: 'Dashboard', icon-cls: 'fa fa-tachometer'},
	 *      {id: 'channels', title: 'Channels', icon-cls: 'fa fa-exchange'}
	 *     ]
	 *    },
	 *    { {id: 'reports', title: 'Reports', icon-cls: 'fa fa-chart-o'}
	 * ];
	 * React.render(
	 *   React.createElement(SideNav,{ navigation: navigation }),
	 *   document.getElementById('#sidenav-container')
	 * );
	 *
	 * @type {*|Function}
	 */
	var SideNav = React.createClass({displayName: "SideNav",

	    getInitialState : function() {
	        return {navigation: this.props.navigation};
	    },

	    render: function() {

	        var navigation = this.state.navigation || [];
	        return (
	           React.createElement("ul", {className: "sidenav"}, 
	            
	                navigation.map(function(nav) {
	                    return (React.createElement("li", {className: "sidenav-list"}, 
	                        React.createElement("a", {href: "/" + nav.id}, nav.title, 
	                           React.createElement("span", {className: "menu-icon fa fa-tachometer"})
	                         )
	                    ))
	                })
	            
	           )
	        )
	    }

	});

	module.exports = SideNav;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
