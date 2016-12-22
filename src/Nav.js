
import React, { PropTypes } from 'react';

import { IconSpan } from './IconSpan';

const asElement = ({ name = 'div', className = '', style = {}, children = 'children' } = {} ) => {

    const AsElement = props => {
        const { style: fixedStyles = {}, className: userClassName = '' }  = props;
        const elStyle = { ...style, ...fixedStyles };

        return React.createElement(name, {
            className: `${userClassName} ${className}`,
            style: elStyle
        }, props[children]);

    };
    AsElement.propTypes = {
        style: PropTypes.object,
        className: PropTypes.string
    };

    return AsElement;
};



export const SNav = asElement({ className: 'rui-snav-section', children: 'title' });


export const Nav = (props) => (
    <div>
        <IconSpan><span className={props.icon}></span></IconSpan> {props.text}
    </div>
);

Nav.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
};

SNav.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object
};
