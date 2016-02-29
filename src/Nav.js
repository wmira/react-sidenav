



import React, { PropTypes } from 'react';

import cx from 'classnames';
import styles from './style.css';

import { IconLeft, IconRight } from './Items';

export const ITEM_MAP = {
    'icon-left': IconLeft,
    'icon-right': IconRight
};


export const isActive = (props) => {
    return   ( props.selected && props.selected === props.id  );
};
const Nav = React.createClass({

    propTypes: {
        onClick: PropTypes.func,
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        selected: PropTypes.string,
        type: PropTypes.string,
        navrenderer: PropTypes.node
    },

    itemClicked() {

        if ( this.props.onClick ) {
            this.props.onClick(this.props.id);
        }
    },

    render() {
        const { type } = this.props;

        const Item = ( ITEM_MAP[type] ? ITEM_MAP[type] :
            this.props.navrenderer ) || IconLeft;

        const classes = cx(
            styles['sidenav-item'],
            { [styles['active']] : isActive(this.props) }
        );
        return <div onClick={this.itemClicked} className={classes}>
            <Item {...this.props}/>
        </div>;
    }

});
export { Nav };
//{this.createIconTextContent()}
export default Nav;
