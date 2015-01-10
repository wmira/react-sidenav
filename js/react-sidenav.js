(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["SideNav"] = factory(require("react"));
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
	var RenderWrapper = __webpack_require__(2);
	/**
	 * Extract href
	 *
	 * @param target
	 */
	var extractMenuData = function(target) {

	    var element = target.getAttribute("href") ? target :target.parentNode;

	    return {
	        href: element.getAttribute("href"),
	        navid : element.getAttribute("data-navid")
	    }

	};


	var ItemNav = React.createClass({displayName: "ItemNav",

	    getInitialState : function() {
	        return { navigation : this.props.navigation, subnav : this.props.subnav, selected : this.props.selected};
	    },

	    componentWillReceiveProps : function(nextProps) {
	        if ( nextProps.selection && ( this.state.navigation.id === nextProps.selection.navid  ) ) {
	            this.setState({ selected: true})
	        } else {
	            this.setState({selected: false})
	        }
	    },

	    shouldComponentUpdate:function(nextProps, nextState) {
	        //lets check if we are selected for now
	        return ( (nextProps.selected !== this.props.selected) ||
	            nextState.selected !== this.state.selected )
	    },

	    clickHandler : function(e) {

	        e.preventDefault();
	        e.stopPropagation();
	        

	        var menuData = extractMenuData(e.target);
	        window.history.pushState({id:menuData.href},'',menuData.href);
	        this.props.onItemClicked(menuData);
	        return false;

	    },
	    render : function() {
	        var nav = this.state.navigation;
	        var titleClsName = this.state.subNav ? "sidenav-submenu-item " : "";
	        var linkClsName = "sidenav-link";

	        if ( this.state.selected  ) {
	            linkClsName += " sidenav-selected ";
	        }

	        return (React.createElement("li", {key: nav.id, className: "sidenav-list"}, 

	            React.createElement("a", {onClick: this.clickHandler, href: nav.id, style: {cursor: 'pointer'}, "data-navid": nav.id, className: linkClsName}, 
	                React.createElement("span", {className: titleClsName}, nav.title), 
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
	        console.log('hey');
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
	            React.createElement("a", {onClick: this.onClick, className: "sidenav-link"}, 
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

	    onItemClicked : function(menuData) {
	        this.setState({selection:menuData});
	    },

	    render: function() {

	        var navigation = this.state.navigation || [];

	        return (
	           React.createElement("ul", {className: "sidenav"}, 
	           
	               navigation.map(function (nav) {
	                   if ( nav['sub-menu'] ) {
	                       return React.createElement(PreSubNav, {navigation: nav})
	                   } else {
	                       return React.createElement(ItemNav, {selection: this.state.selection, onItemClicked: this.onItemClicked, navigation: nav})
	                   }
	               }.bind(this))
	           
	           )
	        )
	    }

	});



	module.exports = RenderWrapper(React,SideNav);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*globals require,module,React */
	"use strict";

	/**
	 * React instance creation is a bit noisy. Use this on react a library such
	 * that its more direct to the point when creating new instance. E.g.
	 *
	   React.render(React.createElement(ViewPager,{ views : ["page11","page22","page33"], visible:"page11"}),
	            document.getElementById("viewpager-container2"));
	 * 
	 * to something like
	 *
	 * ViewPager.render({ views : ["page1","page2","page3"], visible:"page1"},"viewpager-container");
	 * or
	 * ViewPager.render("viewpager-container");
	 * 
	 * If your are exposing a library then :
	 * 
	 * var renderWrapper = require("react-render");
	 * var MyReactComponent = React.createClass... 
	 * 
	 * module.exports = renderWrapper(React,MyReactComponent)
	 *
	 */

	    
	var render = function(React,ReactClass,options,el) {
	    
	    var ouroption = {};
	    //if he passed an html element or a string on the first argument
	    //then we assume he wants no options
	    var ourEl = null;
	    
	    //check if its actually an element
	    if ( ( options.tagName && options.nodeName && (typeof options.nodeType === 'number') ) 
	        || ( typeof options === 'string' ) ) {
	        ourEl = options;
	    } else {
	        ouroption = options;
	        ourEl = ( typeof el === 'string') ? document.getElementById(el) : el;
	    }

	    return React.render(React.createElement(ReactClass,ouroption), ourEl);
	};

	var RenderWrapper = function(React,ReactClass) {

	    return {
	        cls : ReactClass,
	        render : function(options,el) {
	            return render(React,ReactClass,options,el)
	        }
	    }

	};

	module.exports = RenderWrapper;


/***/ }
/******/ ])
});
