import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const NavIcon = () => {
    throw new Error('Should not render');
};
export const NavText = () => {
    throw new Error('Should not render');
};

const findComponent = ComponentToFind => children => {
    return Children.toArray(children).reduce((found, next) => {
        if (found === null && next !== null && next.type === ComponentToFind) {
            return next;
        }
        return found;
    }, null);
};

const findIcon = findComponent(NavIcon);
const findText = findComponent(NavText);
const identity = () => {};

const NavItemStyled = styled.div`
     padding: 8px 12px;
     cursor: pointer;
     position: relative;
     background: ${props =>
        props.isHighlighted ? props.highlightBgColor : 'inherit'};
     color: ${props =>
        props.isHighlighted ? props.highlightColor : 'inherit'};

     &:hover {
        color: ${props =>
        props.hoverColor || props.highlightColor || 'inherit'} !important;
        background: ${props =>
        props.hoverBgColor || props.highlightBgColor || 'inherit'} !important;
     }
`;

const NavIconCont = styled.div`
    vertical-align: middle;
    display: inline-flex;
    width: 42px;
`;
const NavTextCont = styled.div`
    vertical-align: middle;
    display: inline-flex;
    padding-right: 16px;
`;

const hasChildNav = children => {
    return Children.toArray(children).reduce((partial, next) => {
        return partial === false ? next.type === Nav : partial;
    }, false);
};

const CollapsedIndicator = styled.div`
    &:before {
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        content: '';
        display: inline-block;
        height: 0.25em;
        left: 0;
        position: relative;
        top: 0.15em;
        transform: rotate(${props => (!props.collapsed ? '135deg' : '45deg')});
        vertical-align: top;
        width: 0.25em;
    }
`;

const collectStyleAndClsName = comp => {
    const { className = undefined, style = {} } = comp && comp.props
        ? comp.props
        : {};
    return { className, style };
};

export class Nav extends Component {
  static contextTypes = {
      highlightColor: PropTypes.string,
      highlightBgColor: PropTypes.string,
      hoverBgColor: PropTypes.string,
      hoverColor: PropTypes.string
  };

  static propTypes = {
      children: PropTypes.node,
      highlightColor: PropTypes.string,
      highlightBgColor: PropTypes.string,
      isHighlighted: PropTypes.bool,
      id: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.number.isRequired
      ]),
      onClick: PropTypes.func,
      highlightedId: PropTypes.string,
      renderSubNavIndicator: PropTypes.func,
      hoverBgColor: PropTypes.string,
      hoverColor: PropTypes.string,
      expanded: PropTypes.bool
  };

  constructor(props) {
        super(props);
        this.state = { collapsed: !props.expanded };
    }

  onNavItemClicked = () => {
      const { onClick = identity } = this.props;
      this.setState({ collapsed: !this.state.collapsed }, () => {
          onClick(this.props.id, null);
          if (this.subNavEl && !this.s) {
              this.subNavEl.style.maxHeight = !this.state.collapsed ? '200px' : '0px';
          }
      });
  };

  childClicked = childId => {
      this.props.onClick(childId, this.props.id);
  };

  setSubNavRef = subNavEl => {
      this.subNavEl = subNavEl;
  };

  renderSubNavIndicator = () => {
      const { renderSubNavIndicator } = this.props;
      if (renderSubNavIndicator) {
          const subNavInd = renderSubNavIndicator(this.state.collapsed);
          if (!subNavInd && typeof console !== 'undefined') {
              console.warn('subNavIndicator returned undefined or null');
          }
          return subNavInd || null;
      }
      return <CollapsedIndicator collapsed={this.state.collapsed} />;
  };

  render() {
        const {
            hoverBgColor,
            hoverColor,
            highlightColor,
            highlightBgColor,
            children,
            highlightedId,
            id
        } = this.props;

        const icon = findIcon(children);
        const text = findText(children);
        const itemProps = {
            hoverBgColor: hoverBgColor || this.context.hoverBgColor,
            hoverColor: hoverColor || this.context.hoverColor,
            onClick: this.onNavItemClicked,
            isHighlighted: id === highlightedId,
            highlightColor: highlightColor || this.context.highlightColor,
            highlightBgColor: highlightBgColor || this.context.highlightBgColor
        };

        return (
            <div>
                <NavItemStyled className="__rsnav___item" {...itemProps}>
                    <NavIconCont {...collectStyleAndClsName(icon)}>
                        {icon && icon.props ? icon.props.children : null}
                    </NavIconCont>
                    <NavTextCont {...collectStyleAndClsName(text)}>
                        {text && text.props ? text.props.children : null}
                    </NavTextCont>
                    {hasChildNav(children)
                        ? <div
                            style={{ position: 'absolute', right: '16px', bottom: '4px' }}
                        >
                            {this.renderSubNavIndicator()}{' '}
                        </div>
                        : null}
                </NavItemStyled>
                <div
                    ref={this.setSubNavRef}
                    style={{
                        maxHeight: this.state.collapsed ? 0 : '200px',
                        transition: 'all 0.2s ease-in-out'
                    }}
                >
                    {Children.toArray(children)
                        .filter(child => child.type === Nav && !this.state.collapsed)
                        .map((child, idx) => {
                            const sicon = findIcon(child.props.children);
                            const stext = findText(child.props.children);
                            const isItemHighlighted =
                highlightedId === `${id}/${child.props.id}`;

                            return (
                                <NavItemStyled
                                    className={'__rsnav___itemchild'}
                                    key={idx}
                                    {...itemProps}
                                    onClick={() => this.childClicked(child.props.id)}
                                    isHighlighted={isItemHighlighted}
                                >
                                    <NavIconCont {...collectStyleAndClsName(sicon)}>
                                        {null}
                                    </NavIconCont>
                                    <NavTextCont {...collectStyleAndClsName(stext)}>
                                        {stext ? stext.props.children : null}
                                    </NavTextCont>
                                </NavItemStyled>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default Nav;
