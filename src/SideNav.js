
import React, { PropTypes } from 'react';
import cx from 'classnames';

import { SCHEMES } from './schemes';
import { createNavItems } from './createNavItems';

const noop = () => {};
/**
 * Side Bar Navigation component
 */
export class SideNav extends React.Component {

    static propTypes = {
        children: PropTypes.node,
        scheme: PropTypes.string,
        selectedId: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        style: PropTypes.object,
        highlightScheme: PropTypes.oneOf(Object.keys(SCHEMES))
    }

    static defaultProps = {
        onClick: noop,
        scheme: 'default',
        style: {},
        highlightScheme: SCHEMES.danger
    }

    onClick = (id) => {
        const { onClick } = this.props;
        onClick(id);
    }

    render() {
        const { children, selectedId, scheme, style, highlightScheme } = this.props;

        const containerClass = cx({
            'rui-snav-clight': scheme === 'default',
            'rui-snav-cdark': scheme !== 'default'
        });

        return (
            <div className={containerClass} style={{width: '100%', height: '100%', ...style}}>
                <ul className={'rui-snav'} >
                    {createNavItems({ children, onClick: this.onClick, selectedId, scheme, highlightScheme })}
                </ul>
            </div>
        );
    }
}
