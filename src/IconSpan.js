
import React, { PropTypes } from 'react';

export const IconSpan = (props) => (<span style={{display: 'inline-block', width: props.width }}>{ props.children ? props.children : null }</span>);

IconSpan.defaultProps = {
    width: 22
};

IconSpan.propTypes = {
    children: PropTypes.node,
    width: PropTypes.number
};

export default IconSpan;