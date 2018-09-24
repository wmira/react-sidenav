import React, { cloneElement, Component, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Nav from './Nav';

const contextTypes = {
    highlightColor: PropTypes.string,
    highlightBgColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    hoverColor: PropTypes.string
};

const noop = () => {};

export class SideNav extends Component {
    static childContextTypes = contextTypes;
    static propTypes = {
        ...contextTypes,
        selected: PropTypes.string,
        defaultSelected: PropTypes.string,
        onItemSelection: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: props.defaultSelected,
            defaultSelected: props.defaultSelected
        };
    }

    getChildContext() {
        const {
            highlightColor,
            highlightBgColor,
            hoverBgColor,
            hoverColor
        } = this.props;
        return { highlightColor, highlightBgColor, hoverBgColor, hoverColor };
    }

    onNavClick = (id, parent = null) => {
        const { onItemSelection = noop } = this.props;

        if (this.state.defaultSelected) {
        //lets manage it
            this.setState({ selected: id }, () => {
                onItemSelection(id, parent);
            });
        } else {
            onItemSelection(id, parent);
        }
    };

    render() {
        const { children, className } = this.props;
        return (
            <div className={ classnames(className) }>
                {Children.toArray(children).map(child => {
                    if (child && child.type === Nav) {
                        const currentSelected = this.state.defaultSelected
                            ? this.state.selected
                            : this.props.selected;
                        return cloneElement(child, {
                            highlightedId: currentSelected,
                            onClick: this.onNavClick
                        });
                    }
                    return child;
                })}
            </div>
        );
    }
}

export default SideNav;
