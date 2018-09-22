import { INavStateProp } from "react-sidenav/types/ISideNavStateProp";
import { ComponentClass } from "react";
import { INavTheme } from "react-sidenav/types/INavTheme";


export interface ITemplateComponents<T extends INavTheme = INavTheme> {
    item?: ComponentClass<INavStateProp>
    children?: ComponentClass<INavStateProp>
    child?: ComponentClass<INavStateProp>
    icon?: ComponentClass<INavStateProp>
    text?: ComponentClass<INavStateProp>
    indicator?: ComponentClass<INavStateProp>
}