import { OnItemSelectionListener } from "./OnItemSelectionListener";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";
import { INavTheme } from "react-sidenav/types/INavTheme";

export interface ISideNavProp {
    onItemSelection?: OnItemSelectionListener
    selectedPath?: string
    defaultSelectedPath?: string
    template?: ITemplateComponents
    theme?: INavTheme
}