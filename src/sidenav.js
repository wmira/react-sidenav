/** @jsx React.DOM */
/*globals require,module */
/* jshint -W097,esnext: true */
"use strict";

var React = require("react");

var DEFAULT_SELECTED_CSS = "selected";
var DEFAULT_CLASSNAME = "sidenav";

var ItemCreateMixin = {
    
    createItems: function(item) {
        
        if ( item.subMenu ) {
            return (
                <SubMenu navigation={item.subMenu}></SubMenu>
            )
        } else if ( this.props.itemType === "lefticon" ) {

            return React.addons.cloneWithProps(<IconLeftItem children={item.title}/>, {
                itemHeight :  this.props.height,
                className : item.iconClassName
            });

        } else if ( this.props.itemType === "righticon" ) {
            return React.addons.cloneWithProps(<IconRightItem children={item.title}/>, {
                itemHeight :  this.props.height,
                className : item.iconClassName
            })
        } else if ( this.props.itemType === "text" ) {
            var style = {};
            return <a style={ {"display": "block"}}><span style={ style }>{item.title}</span></a>
        }
        
    }
};


var Menu = React.createClass({
    
    getInitialState() {
        return { "selected" : this.props.defaultSelected }
    },
    
    _onItemClick : function(key) {
        this.setState( { "selected" : key } );
    },
    render : function() {

        return (
            <ul className={this.props.className} style={ { "listStyle" : "none" ,"padding":"0", "margin" : "0"} }>
                {
                    
                    React.Children.map(this.props.children, child => {

                        var className = this.props.className || DEFAULT_CLASSNAME;
                        var selectedClassName = this.props.selectedClassName || (className) ?  className +"-" + DEFAULT_SELECTED_CSS : DEFAULT_SELECTED_CSS;
                        return React.addons.cloneWithProps(child, {
                            height: this.props.itemHeight,
                            onClick : this._onItemClick,
                            selectedItem :  this.state.selected,
                            selectedClassName : selectedClassName
                        })
                    })
                }
            </ul>
        );
        
    }

});

var MenuItem = React.createClass({
    

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

        return (<li className={className} key={this.props.itemKey} onClick={this._onClick} style={ { height : this.props.height, lineHeight: this.props.height}}>
            {
                React.Children.map(this.props.children, child => {
                    if ( child.props ) {
                        return React.addons.cloneWithProps(child, {
                            itemHeight: this.props.height,
                            itemPaddingLeft: this.props.itemPaddingLeft
                        })    
                    } else {
                        return child;
                    }
                })
            }

        </li>)
        
        
    }
    
    
});

/**
 * Icon Left style
 *
 * @type {*|Function}
 */
var IconLeftItem = React.createClass({

    
    render : function() {
        
        return (
            <a style={{ "display" : "block"}} href="#"><i className={this.props.className}></i>{this.props.children}</a>
        )
        
    }    
});

/**
 *
 * @type {*|Function}
 */
var IconRightItem = React.createClass({

    /**
     *  
     * @returns {XML}
     */
    render : function() {
        
        return (
            <a style={{ "display" : "block"}} href="#">{this.props.children} <i style={ { "lineHeight": this.props.itemHeight , "float" : "right"} } className={this.props.className}></i></a>
        )

    }
});
var SubMenu = React.createClass({
    mixins: [ItemCreateMixin],

    _onItemClick : function(key) {

    },
    render : function() {
        var items = this.props.navigation || [];
        return (<Menu {...this.props}> {
            items.map(item => {
                return ( <MenuItem itemKey={item.key} onClick={this._onItemClick} children={this.createItems(item)}>
                </MenuItem>)
            })
        }</Menu>);

    }
    
});

var SideNav = React.createClass({

    mixins: [ItemCreateMixin],
    

    /**
     *
     */
    render : function() {

        var items = this.props.navigation || [];
        var children = items.map( item => {
            return ( <MenuItem itemKey={item.key}  >
                {this.createItems(item)}
            </MenuItem>)
        });
        return (
            <Menu {...this.props}  children={children}>
            </Menu>
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