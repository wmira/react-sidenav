

import styled from 'styled-components'    
import { INavTheme, ISideNavStateProp, ITemplate } from "../types";

export const NavTemplate = styled.div`
    padding: ${ (props: ISideNavStateProp) => props.level === 0 ? '8px 12px' : '8px 20px' };
    cursor: pointer;
    background: ${ (props: ISideNavStateProp) => props.isSelectedPath ? props.theme.selectionBgColor : props.theme.bgColor || 'inherit' };
    color: ${ (props: ISideNavStateProp) => props.isSelectedPath ? props.theme.selectionColor : props.theme.color  || 'inherit' };

    &:hover {
        background: ${ (props: ISideNavStateProp) => props.theme.hoverBgColor || props.theme.selectionBgColor };
        color: ${ (props: ISideNavStateProp) => props.theme.hoverColor || props.theme.selectionColor };
    }
`

export const ChildrenTemplate = styled.div`
    max-height: ${ (props: ISideNavStateProp) => props.isExpanded?  '1000px' : '0px' };
    transition: all 0.2s ease-in-out;    
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

export const template: ITemplate = {
    nav: NavTemplate,
    children: ChildrenTemplate,
    navChild: NavTemplate,
    theme,    
}
