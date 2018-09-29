
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
`
interface IViewProp {
    key: string
    className?: string
}
const createProps = (key: string, childProps: any): IViewProp => {
    const propsToUse: any = { key }
    if ( childProps.className ) {
        propsToUse.className = propsToUse.children
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
    width: 8px; height: 8px;
    transform: ${ (props:INavItemProp) => props.expanded ? 'rotate(45deg)' : 'rotate(-45deg)'};
    transition: transform 0.3s ease;
    position: absolute;
    left: auto;
    right: 0;
    margin-right: 6px;
`


export class DefaultTemplate extends React.PureComponent<INavItemProp> {

    public render() {
        const { children, template: navTemplate, ...others } = this.props
        const inav = others as INavItemProp
        const { props } = this

        // remap children, to be sure they are on the same order
        const remappedChildren = React.Children.toArray(children)
            .reduce( (partial: Array<React.ReactElement<any>>, child: React.ReactElement<any>, idx: number ) => { // reduce -- we will not display text in compact mode
                if ( child.type === NavIcon  ) {
                    const NavIconTemplate = ( navTemplate && navTemplate.icon ? navTemplate.icon : IconView )
                    const propsToUse: IViewProp & INavItemProp = { ...this.props, ...createProps(`${idx}`, child.props)  }
                    return partial.concat([ React.createElement( NavIconTemplate as React.ComponentClass, propsToUse) ])
                }
                if ( child.type === NavText && props.scheme !== Scheme.compact ) {
                    const NavTextTemplate = navTemplate && navTemplate.item ? navTemplate.item : IconText
                    const propsToUse: IViewProp & INavItemProp = { ...this.props, ...createProps(`${idx}`, child.props)  }
                    return partial.concat([ React.createElement( NavTextTemplate as React.ComponentClass, propsToUse) ])
                }
                return partial.concat([child])
            }, [])
        const IndicatorElement = props.isLeaf === false ? (template.expandIndicator || ArrowRight) : null

        return (
            <Container {...this.props}>
               { remappedChildren }
               { IndicatorElement ? <IndicatorElement {...inav}/> : null }
            </Container>
        )
    }
}
export const template: ITemplateComponents = {
    item: DefaultTemplate,
    children: ChildrenTemplate
}
