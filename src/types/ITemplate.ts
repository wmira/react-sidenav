import { ISideNavStateProp } from "./ISideNavState";
import { ComponentType } from "react";
import { INavTheme } from "./INavTheme";

export interface ITemplate<T extends INavTheme = INavTheme> {
    nav?: ComponentType<ISideNavStateProp>
    children: ComponentType<ISideNavStateProp>
    navChild?: ComponentType<ISideNavStateProp>
    theme?: INavTheme
    extras?: {
        [key: string]: any
    }
}