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
var extractMenuData = function(target) {

    var element = target.getAttribute("href") ? target :target.parentNode;

    return {
        href: element.getAttribute("href"),
        navid : element.getAttribute("data-navid")
    }

};


var ItemNav = React.createClass({

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

    shouldComponentUpdate(nextProps, nextState) {
        //lets check if we are selected for now
        return ( nextProps.selected !== this.props.selected ||
            nextState.selected !== this.state.selected )
    },

    onClick : function(e) {
        e.stopPropagation();
        e.preventDefault();

        var menuData = extractMenuData(e.target);
        window.history.pushState({id:menuData.href},'',menuData.href);
        this.props.onItemClicked(menuData);

    },
    render : function() {
        var nav = this.state.navigation;
        var titleClsName = this.state.subNav ? "sidenav-submenu-item " : "";
        var linkClsName = "sidenav-link";

        if ( this.state.selected  ) {
            linkClsName += " sidenav-selected ";
        }

        return (<li key={nav.id} className="sidenav-list">
            <a  data-navid={nav.id} onClick={this.onClick} className={linkClsName} href={nav.id}>
                <span  className={titleClsName}>{nav.title}</span>
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
                       return <ItemNav navigation={nav}  subnav={true}/>
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
            <a  onClick={this.onClick} className="sidenav-link" >
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

    onItemClicked : function(menuData) {
        this.setState({selection:menuData});
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
                       return <ItemNav selection={this.state.selection} onItemClicked={this.onItemClicked} navigation={nav}/>
                   }
               }.bind(this))
           }
           </ul>
        )
    }

});



module.exports = SideNav;
