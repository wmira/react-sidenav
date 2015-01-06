/** @jsx React.DOM */
/*globals require,module */
/* jshint -W097 */
"use strict";

var React = require("react");

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
        return {navigation: this.props.navigation};
    },

    render: function() {

        var navigation = this.state.navigation || [];
        return (
           <ul className="sidenav">
            {
                navigation.map(function(nav) {
                    return (<li className="sidenav-list" >
                        <a href={"/" + nav.id}>{nav.title}
                           <span className="menu-icon fa fa-tachometer"></span>
                         </a>
                    </li>)
                })
            }
           </ul>
        )
    }

});

module.exports = SideNav;