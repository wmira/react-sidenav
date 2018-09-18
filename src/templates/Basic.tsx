

import styled from 'styled-components'
import { INavTheme, ISideNavStateProp, ITemplateComponents } from "../types";

export const NavTemplate = styled.div`
    cursor: pointer;
    padding: 6px 12px;
    background: ${ (props: ISideNavStateProp) => props.selected ? props.theme.selectionBgColor : props.theme.bgColor || 'inherit' };
    color: ${ (props: ISideNavStateProp) => props.selected ? props.theme.selectionColor : props.theme.color  || 'inherit' };
    transition: all 0.2s ease-in-out;
    &:hover {
        background: ${ (props: ISideNavStateProp) => props.theme.hoverBgColor || props.theme.selectionBgColor };
        color: ${ (props: ISideNavStateProp) => props.theme.hoverColor || props.theme.selectionColor };
    }
`

export const NavChildTemplate = styled(NavTemplate)`
    padding: 6px 22px;
`
export const ChildrenTemplate = styled.div`
    max-height: ${ (props: ISideNavStateProp) => props.expanded?  '1000px' : '0px' };
    transition: all 0.3s ease-in-out;
    overflow: hidden;
`
export const template: ITemplateComponents = {
    nav: NavTemplate,
    children: ChildrenTemplate,
    navChild: NavChildTemplate
}
