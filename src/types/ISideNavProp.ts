import { OnItemSelectionListener } from "./OnItemSelectionListener";
import { ComponentType } from "react";
import { ISideNavStateProp } from "./ISideNavState";
import { INavTheme } from "./INavTheme";

export interface ISideNavProp {
    onItemSelection?: OnItemSelectionListener
    selectedPath?: string
    defaultSelectedPath?: string
    navTemplate?: ComponentType<ISideNavStateProp>
    theme?: INavTheme
}