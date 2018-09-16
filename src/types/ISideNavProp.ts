import { OnItemSelectionListener } from "./OnItemSelectionListener";
import { ComponentType } from "react";
import { ISideNavStateProp } from "./ISideNavState";
import { INavTheme } from "./INavTheme";

export interface ISideNavProp {
    onItemSelection?: OnItemSelectionListener
    selectedPath?: string
    defaultSelectedPath?: string
    template?: {
        nav?: ComponentType<ISideNavStateProp>
        children: ComponentType<ISideNavStateProp>
        navChild?: ComponentType<ISideNavStateProp>
        theme?: INavTheme
        extras?: {
            [key: string]: any
        }
    }
}