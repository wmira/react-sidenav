import { OnItemSelectionListener } from "./OnItemSelectionListener";
import { ComponentType } from "react";
import { INavTheme } from "./INavTheme";


export interface ISideNavContext<P = {}> {
    onItemSelection?: OnItemSelectionListener<P>
    selectedPath: string
    navTemplate: ComponentType
    theme: INavTheme
}