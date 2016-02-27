
import React from 'react';
import Nav from './Nav';
import IconTextSchemeMixin from './IconTextSchemeMixin';
import cx from 'classnames';

import style from './style.css';

const NavGroup = React.createClass({

    mixins: [IconTextSchemeMixin],

    propTypes: {
        onClick: React.PropTypes.func,
        selected: React.PropTypes.any,
        nav: React.PropTypes.object,
        children: React.PropTypes.node,
        id: React.PropTypes.string
    },

    getInitialState() {
        return { collapsed: false  };
    },

    buildChildren() {

        if ( this.props.nav ) {
            return this.props.nav.navlist.map( nav => {
                return (<Nav key={nav.id} selected={this.props.selected} onClick={this.onSubNavClick} {...nav}/>);
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
            style['rui-snav-items']
        );

        const styles = {
            height: this.state.collapsed ? this.__computedHeight : 0
        };

        return (
            <div className={style['rui-snav-grp-c']} >
                <div onClick={this.onClick} className={style['rui-snav-grp']}>{this.createIconTextContent()}</div>
                <div  ref='cont' style={styles} className={itemsClassnames}>
                    {this.buildChildren() }
                </div>
            </div>
        );

    }
});
export {NavGroup};
export default NavGroup;
