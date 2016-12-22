
import React, { PropTypes } from 'react';
import cx from 'classnames';

import { SCHEMES } from './schemes';
import { Nav } from './Nav';


const SCHEMES_STYLE = {
    [SCHEMES.green]: 'rui-snav-item-green',
    [SCHEMES.blue]: 'rui-snav-item-blue',
    [SCHEMES.danger]: 'rui-snav-item-danger',
    [SCHEMES.warning]: 'rui-snav-item-warning'
};
/**
 * Item
 */
export class NavItem extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        onClick: PropTypes.func,
        selectedId: PropTypes.string,
        scheme: PropTypes.string,
        isGroupSection: PropTypes.bool
    }

    static defaultProps = {
        scheme: 'default',
        isGroupSection: false
    }

    onClick = () => {
        if ( this.props.onClick ) {
            this.props.onClick(this.props.id);
        }
    }

    render() {
        const { props } = this;
        const { selectedId, id, highlightScheme, scheme, style = {}, isGroupSection } = props;

        const selected = selectedId === id && selectedId !== undefined;
        const className = cx('rui-snav-nav', SCHEMES_STYLE[SCHEMES[highlightScheme]],
            {
                'rui-snav-item-text-dark': scheme === 'default' && !isGroupSection,
                'rui-snav-item-selected': selected
            });
        return (
            <li onClick={this.onClick} style={style}
                className={className}>
                {props.children ? props.children : <Nav {...props} /> }
            </li>
        );
    }
};
