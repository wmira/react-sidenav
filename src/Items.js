import React, { PropTypes } from 'react';


export const IconLeft = (props) => {
    const { icon, text, id } = props;

    return <div>
        <span key={id + '-icn'} style={{paddingRight: 10}}
            className={icon}></span>
        <span key={props.id + '-txt'}>{text}</span>
    </div>;
};

export const IconRight = (props) => {
    const { icon, text, id } = props;

    return <div>
        <span>{text}</span>
        <div style={{ float: 'right', display: 'inline-block', paddingRight: 2} }>
            <span key={id + '-icn'} style={{ paddingRight: 10 }}
                className={icon}></span>
        </div>
    </div>;
};

const propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string
};

IconLeft.propTypes = propTypes;
IconRight.propTypes = propTypes;
