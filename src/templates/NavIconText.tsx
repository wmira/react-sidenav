
import * as React from 'react'
import styled, { css } from 'styled-components'
import { INavTheme, ISideNavStateProp, ITemplateComponents } from "../types";
import { findChild } from 'react-sidenav/templates/findChild';
import { ITemplateProp } from 'react-sidenav/types/ITemplateProp';


export const ChildrenTemplate = styled.div`
    max-height: ${ (props: ISideNavStateProp) => props.expanded?  '1000px' : '0px' };
    transition: all 0.3s ease-in-out;
    overflow: hidden;
`

export const theme: INavTheme = {
    color: 'inherit',
    bgColor: 'inherit',
    className: '',
    selectionColor: 'deepskyblue',
    selectionBgColor: '#F5F5F5',
    hoverColor: 'deepskyblue',
    hoverBgColor: '#F5F5F5'
}


export const NavIcon = (props: ITemplateProp): undefined => {
    return undefined
}
export const NavText = (props: ITemplateProp): undefined => {
    return undefined
}
export const ExpandIndicator = (props: ITemplateProp): undefined => {
    return undefined
}

export const NavItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${ (props: ISideNavStateProp) => props.level === 0 ? '8px 12px' : '8px 20px' };
    cursor: pointer;
    background: ${ (props: ISideNavStateProp) => props.selected ? props.theme.selectionBgColor : props.theme.bgColor || 'inherit' };
    color: ${ (props: ISideNavStateProp) => props.selected ? props.theme.selectionColor : props.theme.color  || 'inherit' };
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${ (props: ISideNavStateProp) => props.theme.hoverBgColor || props.theme.selectionBgColor };
        color: ${ (props: ISideNavStateProp) => props.theme.hoverColor || props.theme.selectionColor };
    }
`
export const IconCont = styled.div`
    color: ${ (props: ISideNavStateProp) => props.selected ? props.theme.selectionIconColor : props.theme.color  || 'inherit' };
`
export const TextCont = styled.div`
    padding-left: 12px;
`

export class NavTemplate extends React.PureComponent<ISideNavStateProp & { className?: string }> {

    public render() {
        const { props } = this
        const IconCnt = findChild(NavIcon, props)
        const TextCnt =  findChild(NavText, props)
        const IconView = this.props.template.icon || IconCont

        const IconCntClssName = IconCnt && IconCnt.props ? IconCnt.props.className : ''
        const TextCntClssName = TextCnt && TextCnt.props ? TextCnt.props.className : ''
        return (
            <NavItemContainer {...this.props}>
                <IconView {...this.props}
                    className={IconCntClssName}>{ IconCnt && IconCnt.props ? IconCnt.props.children : null }
                </IconView>
                <TextCont className={TextCntClssName}>{ TextCnt && TextCnt.props ? TextCnt.props.children : null }</TextCont>
            </NavItemContainer>
        )
    }
}

export const template: ITemplateComponents = {
    nav: NavTemplate,
    children: ChildrenTemplate,
    navChild: NavTemplate
}
