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
	 * Extract href
	 *
	 * @param target
	 */
	var extractPath = function(target) {
	    return target.getAttribute("href") ?
	        target.getAttribute("href") :
	        target.parentNode.getAttribute("href");

	};

	var ItemNav = React.createClass({displayName: "ItemNav",

	    getInitialState : function() {
	        return { navigation : this.props.navigation, subnav : this.props.subnav };
	    },

	    onClick : function(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        var path = extractPath(e.target);
	        window.history.pushState({id:path},'',path);

	    },
	    render : function() {
	        var nav = this.state.navigation;
	        return (React.createElement("li", {key: nav.id, className: "sidenav-list"}, 
	            React.createElement("a", {onClick: this.onClick, className: "sidenav-link", href: "/" + nav.id}, 
	                React.createElement("span", {className: this.state.subnav ? "sidenav-submenu-item" : ""}, nav.title), 
	                React.createElement("span", {className: "sidenav-icon " + (nav['icon-cls'] ? nav['icon-cls'] : '')})
	            )
	        ));
	    }

	});
	var SubNav = React.createClass({displayName: "SubNav",

	    getInitialState : function() {
	        return {navigation: this.props.navigation};
	    },

	    render: function() {

	        var nav = this.state.navigation || [];

	        var navigation = nav['sub-menu'];
	        return (
	            React.createElement("ul", {className: "sidenav-submenu-sidenav"}, 
	           
	               navigation.map(function (nav) {
	                   if ( nav['sub-menu'] ) {
	                       return React.createElement(PreSubNav, {navigation: nav})
	                   } else {
	                       return React.createElement(ItemNav, {navigation: nav, subnav: true})
	                   }
	               }.bind(this))
	               
	            )
	        )
	    }
	});

	var PreSubNav = React.createClass({displayName: "PreSubNav",
	    getInitialState : function() {
	        return { navigation : this.props.navigation, collapse: false };
	    },

	    onClick : function(e) {
	        e.stopPropagation();
	        e.preventDefault();

	        this.setState ( { collapse: !this.state.collapse } );


	    },
	    render : function() {
	        var nav = this.state.navigation;
	        var containerCls = this.state.collapse ? "sidenav-submenu " : "sidenav-submenu  sidenav-submenu-closed";
	        var iconCls = this.state.collapse ? "sidenav-icon fa fa-chevron-down" : "sidenav-icon fa fa-chevron-left";
	        return (React.createElement("li", {ref: "menuContainer", key: nav.id, className: containerCls}, 
	            React.createElement("a", {onClick: this.onClick, className: "sidenav-link", href: "/" + nav.id}, 
	                React.createElement("span", null, nav.title), 
	                React.createElement("span", {className: iconCls})
	            ), 
	            React.createElement(SubNav, {navigation: nav})
	        ));
	    }
	});
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
	        return {navigation: this.props.navigation, rootPath: this.props.rootPath};
	    },

	    onClick : function(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        var path = extractPath(e.target);
	        window.history.pushState({id:path},'',path);

	    },
	    render: function() {

	        var navigation = this.state.navigation || [];
	        return (
	           React.createElement("ul", {className: "sidenav"}, 
	           
	               navigation.map(function (nav) {
	                   if ( nav['sub-menu'] ) {
	                       return React.createElement(PreSubNav, {navigation: nav})
	                   } else {
	                       return React.createElement(ItemNav, {navigation: nav})
	                   }
	               }.bind(this))
	            
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
