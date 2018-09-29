import { OnNavSelectionListener } from "./OnItemSelectionListener";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";
import { INavTheme } from "react-sidenav/types/INavTheme";
import { Scheme } from "react-sidenav/types/Scheme";

export interface ISideNavContext<P = {}> {
    onItemSelection?: OnNavSelectionListener<P>
    selectedPath: string
    template: ITemplateComponents
    theme: INavTheme
    scheme: Scheme
}