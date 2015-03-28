/** @jsx React.DOM */
/*globals require,module */
/* jshint -W097,esnext: true */
"use strict";

var React = require("react");


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
var IconLeftItem = React.createClass({

    mixins: [PathCreateMixin],

    render : function() {

        return (
            <a {...this.createAttribs()}><i className={this.props.className}></i>{this.props.children}</a>
        )

    }
});

/**
 *
 * @type {*|Function}
 */
var IconRightItem = React.createClass({
    mixins: [PathCreateMixin],
    /**
     *
     * @returns {XML}
     */
    render : function() {
        return (
            <a {...this.createAttribs()}>{this.props.children} <i style={ { "lineHeight": this.props.itemHeight , "float" : "right"} } className={this.props.className}></i></a>
        )

    }
});

var PlainLink = React.createClass({

    mixins: [PathCreateMixin],
    render : function() {

        return (
            <a {...this.createAttribs()}><span>{this.props.children}</span></a>
        )
    }
});

var PlainText = React.createClass({

    mixins: [PathCreateMixin],
    render : function() {

        return (
            <div data-path={this.createPath()} style={{ "display" : "block", "cursor": "pointer"}} >{this.props.children}</div>
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
                <SubMenu navigation={item.subMenu}></SubMenu>
            )
        } else {

            ItemComponent = Items[this.props.itemType];

            if ( ItemComponent ) {
                return React.addons.cloneWithProps(<ItemComponent children={item.title}/>, createProps());
            } else {

                return item.title;
            }
        }


    }
};




var Menu = React.createClass({

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
            <ul className={className} style={ { "listStyle" : "none" ,"padding":"0", "margin" : "0"} }>
                {
                    React.Children.map(this.props.children, child => {

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
                    })
                }
            </ul>
        );

    }

});

/**
 *
 *
 * @type {*|Function}
 */
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
        var id = this.props.id || '';

        return (<li id={id} className={className} key={this.props.itemKey} onClick={this._onClick} style={ { height : this.props.height, lineHeight: this.props.height}}>
            {
                React.Children.map(this.props.children, child => {
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
                })
            }

        </li>)


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


/**
 * The SideNav entry point that creates navigation using config file
 *
 * @type {*|Function}
 */
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




SideNav.Menu        = Menu;
SideNav.MenuItem    = MenuItem;
SideNav.ILeftItem   = IconLeftItem;
SideNav.IRightItem  = IconRightItem;
SideNav.PlainText   = PlainText;
SideNav.PlainLink   = PlainLink;

module.exports = SideNav;
