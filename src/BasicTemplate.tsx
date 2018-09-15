
import { ISideNavStateProp } from "./types";

import styled from 'styled-components'    
import { INavTheme } from "./types/INavTheme";

export const BasicTemplate = styled.div`
    padding: 8px 12px;
    cursor: pointer;
    background: ${ (props: ISideNavStateProp) => props.isSelectedPath ? props.theme.selectionBgColor : props.theme.bgColor || 'inherit' };
    color: ${ (props: ISideNavStateProp) => props.isSelectedPath ? props.theme.selectionColor : props.theme.color  || 'inherit' };
    
    &:hover {
        background: ${ (props: ISideNavStateProp) => props.theme.hoverBgColor || props.theme.selectionBgColor };
        color: ${ (props: ISideNavStateProp) => props.theme.hoverColor || props.theme.selectionColor };
    }
`
export const BasicTheme: INavTheme = {    
    color: 'inherit',
    bgColor: 'inherit',
    className: '',
    selectionColor: 'deepskyblue',
    selectionBgColor: '#F5F5F5',    
    hoverColor: 'deepskyblue',
    hoverBgColor: '#F5F5F5'
}