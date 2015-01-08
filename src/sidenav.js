/** @jsx React.DOM */
/*globals require,module */
/* jshint -W097 */
"use strict";

var React = require("react");

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

var ItemNav = React.createClass({

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
        return (<li key={nav.id} className="sidenav-list">
            <a  onClick={this.onClick} className="sidenav-link" href={"/" + nav.id}>
                <span  className={this.state.subnav ? "sidenav-submenu-item" : ""}>{nav.title}</span>
                <span className={"sidenav-icon " + (nav['icon-cls'] ? nav['icon-cls'] : '')}></span>
            </a>
        </li>);
    }

});
var SubNav = React.createClass({

    getInitialState : function() {
        return {navigation: this.props.navigation};
    },

    render: function() {

        var nav = this.state.navigation || [];

        var navigation = nav['sub-menu'];
        return (
            <ul className="sidenav-submenu-sidenav">
           {
               navigation.map(function (nav) {
                   if ( nav['sub-menu'] ) {
                       return <PreSubNav navigation={nav} />
                   } else {
                       return <ItemNav navigation={nav} subnav={true}/>
                   }
               }.bind(this))
               }
            </ul>
        )
    }
});

var PreSubNav = React.createClass({
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
        return (<li ref="menuContainer" key={nav.id} className={containerCls}>
            <a  onClick={this.onClick} className="sidenav-link" href={"/" + nav.id}>
                <span>{nav.title}</span>
                <span className={iconCls}></span>
            </a>
            <SubNav navigation={nav}/>
        </li>);
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
var SideNav = React.createClass({

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
           <ul className="sidenav">
           {
               navigation.map(function (nav) {
                   if ( nav['sub-menu'] ) {
                       return <PreSubNav navigation={nav} />
                   } else {
                       return <ItemNav navigation={nav}/>
                   }
               }.bind(this))
            }
           </ul>
        )
    }

});



module.exports = SideNav;
