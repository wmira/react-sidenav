

import React from 'react';

const IconTextSchemeMixin = {


    createIconTextContent() {

        var contentEls = [], propsIcon = this.props.icon,
            propsText = this.props.text,
            icon, text, style = this.props.style;
        let counter = 0;
        if ( !style ) {
            style = 'it'; //icon, text
        }
        if ( !propsIcon && this.props.nav ) {
            propsIcon = this.props.nav.icon;
        }
        if ( !propsText && this.props.nav ) {
            propsText = this.props.nav.text;
        }

        if ( propsIcon ) {
            icon = (<span key={this.props.id + '-' + counter++} style={{paddingRight: 10}} className={propsIcon}></span>);
        }
        if ( propsText ) {
            text = (<span key={this.props.id + '-' + counter++}>{propsText}</span>);
        }

        if ( style === 'it' ) {
            if ( icon ) {
                contentEls.push(icon);
            }
            if ( text ) {
                contentEls.push(text);
            }
        }

        return contentEls;

    }

};

export default IconTextSchemeMixin;
