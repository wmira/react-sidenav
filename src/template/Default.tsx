
import * as React from 'react'
import styled from "styled-components";
import { INavStateProp } from 'react-sidenav/types';

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
    position: relative;
    padding: ${ (props: INavStateProp ) => createPadding(props.level)};
    align-items: center;
    cursor: pointer;
    background: ${ (props: INavStateProp) => props.selected ? props.theme.selectionBgColor : props.theme.bgColor || 'inherit' };
    color: ${ (props: INavStateProp) => props.selected ? props.theme.selectionColor : props.theme.color  || 'inherit' };
    &:hover {
        background: ${ (props: INavStateProp) => props.theme.hoverBgColor || props.theme.selectionBgColor };
        color: ${ (props: INavStateProp) => props.theme.hoverColor || props.theme.selectionColor };
    }
`
const determineIconColor = (props: INavStateProp ) => {
    if ( props.selected ) {
        return props.theme.selectionIconColor || props.theme.selectionColor || 'inherit'
    }
    return 'inherit'
}


export const IconView = styled.div`
    color: ${ (props: INavStateProp ) => determineIconColor(props)  };
`
interface IViewProp {
    key: string
    children?: React.ReactNode,
    className?: string
}
const createProps = (key: string, childProps: any): IViewProp => {
    const propsToUse: any = { key }
    if ( childProps.className ) {
        propsToUse.className = propsToUse.children
    }
    if ( childProps.children ) {
        propsToUse.children =childProps.children
    }

    return propsToUse
}

export class DefaultTemplate extends React.PureComponent<INavStateProp> {

    public render() {
        const { children, template: navTemplate, ...others } = this.props
        const { props } = this

        // remap children, to be sure they are on the same order
        const remappedChildren = React.Children.toArray(children)
            .reduce( (partial: Array<React.ReactElement<any>>, child: React.ReactElement<any>, idx: number ) => { // reduce -- we will not display text in compact mode
                if ( child.type === NavIcon  ) {
                    const NavIconTemplate = navTemplate ? navTemplate.icon : IconView
                    const propsToUse: IViewProp & INavStateProp = { ...this.props, ...createProps(`${idx}`, child.props)  }
                    return partial.concat([ React.createElement( NavIconTemplate, propsToUse) ])
                }
                if ( child.type === NavText && props.scheme !== Scheme.compact ) {
                    const NavIconTemplate = navTemplate ? navTemplate.item : IconView
                    const propsToUse: IViewProp & INavStateProp = { ...this.props, ...createProps(`${idx}`, child.props)  }
                    return partial.concat([ React.createElement( NavIconTemplate, propsToUse) ])
                }
                return partial.concat([child])
            }, [])

        return (
            <Container {...this.props}>
               { remappedChildren }
            </Container>
        )
    }
}
export const template = {
    item: DefaultTemplate
}
