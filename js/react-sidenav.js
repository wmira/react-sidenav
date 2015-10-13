(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react/addons"));
	else if(typeof define === 'function' && define.amd)
		define(["react/addons"], factory);
	else if(typeof exports === 'object')
		exports["SideNav"] = factory(require("react/addons"));
	else
		root["SideNav"] = factory(root["React"]);
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

	/** @jsx React.DOM */
	/*globals require,module */
	/* jshint -W097,esnext: true */
	"use strict";

	var React = __webpack_require__(1);


	var DEFAULT_SELECTED_CSS = "selected";
	var DEFAULT_CLASSNAME = "sidenav";


	var PathCreateMixin = {

	    createPath : function() {

	        if ( this.props.path ) {
	            return this.props.path + "/" + this.props.itemKey
	        } else {
	            return this.props.itemKey;
	        }

	    },

	    createAttribs : function() {
	        var attribs = {
	            style : { 'display' : 'block', 'cursor' : 'pointer' }
	        };
	        if ( this.props.setHref === true ) {
	            attribs['href'] =  this.createPath()
	        }
	        attribs['data-path'] = this.createPath();

	        return attribs;

	    }

	};
	/**
	 * Icon Left style
	 *
	 * @type {*|Function}
	 */
	var IconLeftItem = React.createClass({displayName: "IconLeftItem",

	    mixins: [PathCreateMixin],

	    render : function() {

	        return (
	            React.createElement("a", React.__spread({},  this.createAttribs()), React.createElement("i", {className: this.props.className}), this.props.children)
	        )

	    }
	});

	/**
	 *
	 * @type {*|Function}
	 */
	var IconRightItem = React.createClass({displayName: "IconRightItem",
	    mixins: [PathCreateMixin],
	    /**
	     *
	     * @returns {XML}
	     */
	    render : function() {
	        return (
	            React.createElement("a", React.__spread({},  this.createAttribs()), this.props.children, " ", React.createElement("i", {style:  { "lineHeight": this.props.itemHeight , "float" : "right"}, className: this.props.className}))
	        )

	    }
	});

	var PlainLink = React.createClass({displayName: "PlainLink",

	    mixins: [PathCreateMixin],
	    render : function() {

	        return (
	            React.createElement("a", React.__spread({},  this.createAttribs()), React.createElement("span", null, this.props.children))
	        )
	    }
	});

	var PlainText = React.createClass({displayName: "PlainText",

	    mixins: [PathCreateMixin],
	    render : function() {

	        return (
	            React.createElement("div", {"data-path": this.createPath(), style: { "display" : "block", "cursor": "pointer"}}, this.props.children)
	        )
	    }
	});

	var Items = {

	    "lefticon"  : IconLeftItem,
	    "righticon" : IconRightItem,
	    "plainlink" : PlainLink,
	    "plaintext" : PlainText

	};

	var ItemCreateMixin = {

	    createItems: function(item) {
	        var ItemComponent;
	        var createProps = function() {
	            return {

	                itemHeight :  this.props.height,
	                className : item.iconClassName,
	                path: this.props.path,
	                itemKey: this.props.itemKey,
	                setHref : this.props.setHref

	            };

	        }.bind(this);

	        if ( item.subMenu ) {
	            return (
	                React.createElement(SubMenu, {navigation: item.subMenu})
	            )
	        } else {

	            ItemComponent = Items[this.props.itemType];

	            if ( ItemComponent ) {
	                return React.addons.cloneWithProps(React.createElement(ItemComponent, {children: item.title}), createProps());
	            } else {

	                return item.title;
	            }
	        }


	    }
	};




	var Menu = React.createClass({displayName: "Menu",

	    getInitialState: function() {
	        return { "selected" : this.props.defaultSelected }
	    },

	    _onItemClick : function(key) {
	        this.setState( { "selected" : key } );
	        if ( this.props.onClick ) {
	            //FIXME: need to pass additional values here.
	            this.props.onClick(key);
	        }
	    },

	    render : function() {
	        var className= this.props.className || DEFAULT_CLASSNAME;

	        return (
	            React.createElement("ul", {className: className, style:  { "listStyle" : "none" ,"padding":"0", "margin" : "0"} }, 
	                
	                    React.Children.map(this.props.children, function(child)  {

	                        var className = this.props.className || DEFAULT_CLASSNAME;
	                        var selectedClassName = this.props.selectedClassName || (className) ?  className +"-" + DEFAULT_SELECTED_CSS : DEFAULT_SELECTED_CSS;
	                        return React.addons.cloneWithProps(child, {
	                            height: this.props.itemHeight,
	                            onClick : this._onItemClick,
	                            selectedItem :  this.state.selected,
	                            selectedClassName : selectedClassName,
	                            path : this.props.path,
	                            setHref : this.props.setHref !== false
	                        })
	                    }.bind(this))
	                
	            )
	        );

	    }

	});

	/**
	 *
	 *
	 * @type {*|Function}
	 */
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
	        var id = this.props.id || '';

	        return (React.createElement("li", {id: id, className: className, key: this.props.itemKey, onClick: this._onClick, style:  { height : this.props.height, lineHeight: this.props.height}}, 
	            
	                React.Children.map(this.props.children, function(child)  {
	                    if ( child.props ) {
	                        return React.addons.cloneWithProps(child, {
	                            itemHeight: this.props.height,
	                            itemPaddingLeft: this.props.itemPaddingLeft,
	                            itemKey : this.props.itemKey,
	                            path: this.props.path,
	                            setHref : this.props.setHref !== false
	                        })
	                    } else {
	                        return child;
	                    }
	                }.bind(this))
	            

	        ))


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


	/**
	 * The SideNav entry point that creates navigation using config file
	 *
	 * @type {*|Function}
	 */
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




	SideNav.Menu        = Menu;
	SideNav.MenuItem    = MenuItem;
	SideNav.ILeftItem   = IconLeftItem;
	SideNav.IRightItem  = IconRightItem;
	SideNav.PlainText   = PlainText;
	SideNav.PlainLink   = PlainLink;

	module.exports = SideNav;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;