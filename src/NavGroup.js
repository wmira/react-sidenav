
import React, { PropTypes } from 'react';
import Nav from './Nav';
import cx from 'classnames';

import style from './style.css';

import { ITEM_MAP } from './Nav';


const NavGroup = React.createClass({

    propTypes: {
        onClick: PropTypes.func,
        selected: PropTypes.any,
        nav: PropTypes.object,
        children: PropTypes.node,
        id: PropTypes.string,
        type: PropTypes.string
    },

    getInitialState() {
        return { collapsed: false  };
    },

    buildChildren() {

        if ( this.props.nav ) {
            return this.props.nav.navlist.map( nav => {
                return (<Nav type={this.props.type} key={nav.id} selected={this.props.selected} onClick={this.onSubNavClick} {...nav}/>);
            });
        } else {
            return this.props.children;
        }
    },

    componentWillReceiveProps(nextProps) {
        this.setState({selected: nextProps.selected});
    },

    onSubNavClick(id) {
        if ( this.props.onClick ) {
            this.props.onClick(this.props.id, id);
        }
    },

    onClick() {
        this.setState({collapsed: !this.state.collapsed});
    },

    componentDidMount() {
        //we cant transition 0 height to auto height.. so below is the result
        if ( !this.__computedHeight ) {
            var cloned = this.refs.cont.cloneNode(true);
            cloned.style.position = 'absolute';
            cloned.style.left = '-9999px';
            cloned.style.height = 'auto';
            document.body.appendChild(cloned);
            this.__computedHeight = cloned.clientHeight;
            document.body.removeChild(cloned);
        }

    },

    render() {

        const itemsClassnames = cx(
            style['rui-snav-items'],
        );
        const groupClassnames = cx(
            style['rui-snav-grp'],
            { [style['rui-snav-collapsed']]: this.state.collapsed }
        );

        const styles = {
            height: this.state.collapsed ? this.__computedHeight : 0
        };

        const Item = ITEM_MAP[this.props.type || 'icon-left'];

        return (
            <div className={style['rui-snav-grp-c']} >
                <div onClick={this.onClick} className={groupClassnames}>
                    <Item icon={'fa fa-chevron-down'} text={this.props.nav.text} />
                </div>
                <div  ref='cont' style={styles} className={itemsClassnames}>
                    {this.buildChildren() }
                </div>
            </div>
        );

    }
});
export {NavGroup};
export default NavGroup;
