
import * as React from 'react'
import styled from "styled-components";
import { INavItemProp, ITemplateComponents } from 'react-sidenav/types';

import { NavText, NavIcon } from 'react-sidenav/template/components';
import { Scheme } from 'react-sidenav/types/Scheme';

const BASE_PADDING_LEFT = 12
const PADDING_INCREMENT = 12
const PADDING_RIGHT = BASE_PADDING_LEFT

const createPadding = (level: number) => {
    const indent =  (BASE_PADDING_LEFT + (level * PADDING_INCREMENT))  + "px";
    return `8px ${PADDING_RIGHT}px 8px ${indent}`
}
const Container = styled.div`
    display: flex;
    transition: all 0.3s ease;
    position: relative;
    padding: ${ (props: INavItemProp ) => createPadding(props.level)};
    align-items: center;
    justify-content: ${ (props: INavItemProp) => props.scheme === Scheme.compact ? 'center' : 'flex-start' };
    cursor: pointer;
    background: ${ (props: INavItemProp) => props.selected ? props.theme.selectionBgColor : props.theme.bgColor || 'inherit' };
    color: ${ (props: INavItemProp) => props.selected ? props.theme.selectionColor : props.theme.color  || 'inherit' };
    &:hover {
        background: ${ (props: INavItemProp) => props.theme.hoverBgColor || props.theme.selectionBgColor };
        color: ${ (props: INavItemProp) => props.theme.hoverColor || props.theme.selectionColor };
    }
`

export const ChildrenTemplate = styled.div`
    max-height: ${ (props: INavItemProp) => props.expanded ?  '1000px' : '0px' };
    transition: all 0.3s ease-in-out;
    overflow: hidden;
`
const determineIconColor = (props: INavItemProp ) => {
    if ( props.selected ) {
        return props.theme.selectionIconColor || props.theme.selectionColor || 'inherit'
    }
    return 'inherit'
}

export const IconView = styled.div`
    color: ${ (props: INavItemProp ) => determineIconColor(props)  };
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
`
interface IViewProp {
    key: string
    className?: string
}
const createProps = (key: string, childProps: any): IViewProp => {
    const propsToUse: any = { key }
    if ( childProps.className ) {
        propsToUse.className = propsToUse.className
    }
    if ( childProps.children ) {
        propsToUse.children = childProps.children
    }

    return propsToUse
}

const ArrowRight = styled.div`
    display: inline-block;
    border-right: 1px solid ${(props: INavItemProp) => props.theme.color || 'currentColor'};
    border-bottom: 1px solid ${(props: INavItemProp) => props.theme.color || 'currentColor'};
    width: 4px;
    height: 4px;
    transform: ${ (props:INavItemProp) => props.expanded ? 'rotate(45deg)' : 'rotate(-45deg)'};
    transition: transform 0.3s ease;
    position: absolute;
    left: auto;
    right: 0;
    margin-right: 6px;
`

type NavRenderedTypeProp = IViewProp & INavItemProp

export class DefaultTemplate extends React.PureComponent<INavItemProp> {

    public remapChildren = (partial: React.ReactNode[], child: React.ReactNode, idx: number) => {

      const { children: elementChildren, template: navTemplate, className, ...others } = this.props
      const { props } = this
      const inav = { ...others, template: navTemplate }

      const asElementType = child as React.ReactElement<NavRenderedTypeProp>

      if ( asElementType.type === NavIcon ) {
        const NavIconTemplate = ( navTemplate && navTemplate.icon ? navTemplate.icon : IconView )
        const propsToUse = { ...inav, ...createProps(`${idx}`, asElementType.props)  }
        partial.push(React.createElement( NavIconTemplate, propsToUse))
        return partial
      }
      if ( asElementType.type === NavText  ) {
        if ( props.scheme !== Scheme.compact ) {
          const NavTextTemplate = ( navTemplate && navTemplate.text ? navTemplate.text : IconText )
          const propsToUse = { ...inav, ...createProps(`${idx}`, asElementType.props)  }
          partial.push(React.createElement( NavTextTemplate as React.ComponentClass, propsToUse))
          return partial
        }
        return partial; // we need to return here to ensure it will not get added
      }

      partial.push(child)
      return partial
    }

    public render() {
        const { children: elementChildren, template: navTemplate, className, ...others } = this.props
        const inav = { ...others, template: navTemplate }
        const { props } = this
        // remap children, to be sure they are on the same order
        const remappedChildren = React.Children.toArray(elementChildren).reduce( this.remapChildren, [])
        const IndicatorElement = props.isLeaf === false ? (template.expandIndicator ? template.expandIndicator : ArrowRight) : null

        return (
            <Container {...this.props}>
               { remappedChildren }
               { IndicatorElement ? React.createElement(IndicatorElement, inav) : null }
            </Container>
        )
    }
}
export const template: ITemplateComponents = {
    item: DefaultTemplate,
    children: ChildrenTemplate
}

export const item = DefaultTemplate
export const children = ChildrenTemplate
