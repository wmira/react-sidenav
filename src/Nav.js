

import React, { PropTypes } from 'react';
import IconTextSchemeMixin from './IconTextSchemeMixin';

import cx from 'classnames';
import styles from './style.css';

export const isActive = (props) => {
    return   ( props.selected && props.selected === props.id  );
};

const Nav = React.createClass({

    propTypes: {
        onClick: PropTypes.func,
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        selected: PropTypes.string
    },

    mixins: [ IconTextSchemeMixin ],

    itemClicked() {

        if ( this.props.onClick ) {
            this.props.onClick(this.props.id);
        }

    },


    render() {

        const classes = cx(
            styles['sidenav-item'],
            { [styles['active']] : isActive(this.props) }
        );
        return <div onClick={this.itemClicked} className={classes}>
            {this.createIconTextContent()}
        </div>;
    }

});
export {Nav};
export default Nav;
