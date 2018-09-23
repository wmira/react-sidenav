import { OnNavSelectionListener } from "./OnItemSelectionListener";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";
import { INavTheme } from "react-sidenav/types/INavTheme";
import { Scheme } from "react-sidenav/types/Scheme";

export interface ISideNavProp {
    onItemSelection?: OnNavSelectionListener
    selectedPath?: string
    defaultSelectedPath?: string
    template?: ITemplateComponents
    theme?: INavTheme
    scheme?: Scheme
}