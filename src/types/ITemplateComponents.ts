import { ISideNavStateProp } from "react-sidenav/types/ISideNavState";
import { ComponentClass } from "react";
import { INavTheme } from "react-sidenav/types/INavTheme";


export interface ITemplateComponents<T extends INavTheme = INavTheme> {
    nav?: ComponentClass<ISideNavStateProp>
    children?: ComponentClass<ISideNavStateProp>
    navChild?: ComponentClass<ISideNavStateProp>
    icon?: ComponentClass<ISideNavStateProp>
    label?: ComponentClass<ISideNavStateProp>
    indicator?: ComponentClass<ISideNavStateProp>
    [key: string]: ComponentClass<ISideNavStateProp>
}