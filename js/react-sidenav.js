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
	/* jshint -W097,esnext: true */
	"use strict";

	var React = __webpack_require__(1);

	var DEFAULT_SELECTED_CSS = "selected";
	var DEFAULT_CLASSNAME = "sidenav";

	var ItemCreateMixin = {
	    
	    createItems: function(item) {
	        
	        if ( item.subMenu ) {
	            return (
	                React.createElement(SubMenu, {navigation: item.subMenu})
	            )
	        } else if ( this.props.itemType === "lefticon" ) {

	            return React.addons.cloneWithProps(React.createElement(IconLeftItem, {children: item.title}), {
	                itemHeight :  this.props.height,
	                className : item.iconClassName
	            });

	        } else if ( this.props.itemType === "righticon" ) {
	            return React.addons.cloneWithProps(React.createElement(IconRightItem, {children: item.title}), {
	                itemHeight :  this.props.height,
	                className : item.iconClassName
	            })
	        } else if ( this.props.itemType === "text" ) {
	            var style = {};
	            return React.createElement("a", {style:  {"display": "block"}}, React.createElement("span", {style: style }, item.title))
	        }
	        
	    }
	};


	var Menu = React.createClass({displayName: "Menu",
	    
	    getInitialState:function() {
	        return { "selected" : this.props.defaultSelected }
	    },
	    
	    _onItemClick : function(key) {
	        this.setState( { "selected" : key } );
	    },
	    render : function() {

	        return (
	            React.createElement("ul", {className: this.props.className, style:  { "listStyle" : "none" ,"padding":"0", "margin" : "0"} }, 
	                
	                    
	                    React.Children.map(this.props.children, function(child)  {

	                        var className = this.props.className || DEFAULT_CLASSNAME;
	                        var selectedClassName = this.props.selectedClassName || (className) ?  className +"-" + DEFAULT_SELECTED_CSS : DEFAULT_SELECTED_CSS;
	                        return React.addons.cloneWithProps(child, {
	                            height: this.props.itemHeight,
	                            onClick : this._onItemClick,
	                            selectedItem :  this.state.selected,
	                            selectedClassName : selectedClassName
	                        })
	                    }.bind(this))
	                
	            )
	        );
	        
	    }

	});

	var MenuItem = React.createClass({displayName: "MenuItem",
	    

	    getInitialState : function() {

	        return { "isSelected" : ( this.props.selectedItem ?  ( this.props.selectedItem === this.props.itemKey ) : false ) };
	    },

	    componentWillReceiveProps : function(nextProps) {

	        if ( nextProps.selectedItem && ( this.props.itemKey === nextProps.selectedItem  ) ) {
	            this.setState({ isSelected: true})
	        } else {
	            this.setState({isSelected: false})
	        }
	    },


	    _onClick : function() {
	        if ( this.props.onClick ) {
	            this.props.onClick(this.props.itemKey);
	        }
	        this.setState({"isSelected" : true});
	    },
	    render : function() {
	        var className = this.props.selectedItem === this.props.itemKey  ? this.props.selectedClassName : "";

	        return (React.createElement("li", {className: className, key: this.props.itemKey, onClick: this._onClick, style:  { height : this.props.height, lineHeight: this.props.height}}, 
	            
	                React.Children.map(this.props.children, function(child)  {
	                    if ( child.props ) {
	                        return React.addons.cloneWithProps(child, {
	                            itemHeight: this.props.height,
	                            itemPaddingLeft: this.props.itemPaddingLeft
	                        })    
	                    } else {
	                        return child;
	                    }
	                }.bind(this))
	            

	        ))
	        
	        
	    }
	    
	    
	});

	/**
	 * Icon Left style
	 *
	 * @type {*|Function}
	 */
	var IconLeftItem = React.createClass({displayName: "IconLeftItem",

	    
	    render : function() {
	        
	        return (
	            React.createElement("a", {style: { "display" : "block"}, href: "#"}, React.createElement("i", {className: this.props.className}), this.props.children)
	        )
	        
	    }    
	});

	/**
	 *
	 * @type {*|Function}
	 */
	var IconRightItem = React.createClass({displayName: "IconRightItem",

	    /**
	     *  
	     * @returns {XML}
	     */
	    render : function() {
	        
	        return (
	            React.createElement("a", {style: { "display" : "block"}, href: "#"}, this.props.children, " ", React.createElement("i", {style:  { "lineHeight": this.props.itemHeight , "float" : "right"}, className: this.props.className}))
	        )

	    }
	});
	var SubMenu = React.createClass({displayName: "SubMenu",
	    mixins: [ItemCreateMixin],

	    _onItemClick : function(key) {

	    },
	    render : function() {
	        var items = this.props.navigation || [];
	        return (React.createElement(Menu, React.__spread({},  this.props), " ", 
	            items.map(function(item)  {
	                return ( React.createElement(MenuItem, {itemKey: item.key, onClick: this._onItemClick, children: this.createItems(item)}
	                ))
	            }.bind(this))
	        ));

	    }
	    
	});

	var SideNav = React.createClass({displayName: "SideNav",

	    mixins: [ItemCreateMixin],
	    

	    /**
	     *
	     */
	    render : function() {

	        var items = this.props.navigation || [];
	        var children = items.map( function(item)  {
	            return ( React.createElement(MenuItem, {itemKey: item.key}, 
	                this.createItems(item)
	            ))
	        }.bind(this));
	        return (
	            React.createElement(Menu, React.__spread({},  this.props, {children: children})
	            )
	        )

	    }

	});


	SideNav.Menu = Menu;
	SideNav.MenuItem = MenuItem;
	SideNav.ILeftItem = IconLeftItem;
	SideNav.IRightItem = IconRightItem;

	module.exports = SideNav;


	/*
	var navigation = [
	    {id: 'landing', path:'' , title: 'Dashboard', 'icon-cls': 'fa fa-dashboard'},
	    {id: 'channels', title: 'Channels', 'icon-cls': 'fa fa-exchange'},
	    {id: 'products', title: 'Products', 'icon-cls': 'fa fa-cubes'},
	    {id: 'inventory', title: 'Inventory',
	        'subMenu': [
	            { id: 'levels', title: 'Product Levels', 'icon-cls': 'fa fa-list'},
	            { id: 'salesrep', title: 'Sales Report', 'icon-cls': 'fa fa-area-chart'}
	        ]
	    },
	    {id: 'fleet', title: 'Fleet', 'icon-cls': 'fa fa-truck'}
	];*/

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
