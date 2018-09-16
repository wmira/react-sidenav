import { OnItemSelectionListener } from "./OnItemSelectionListener";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";
import { INavTheme } from "react-sidenav/types/INavTheme";


export interface ISideNavContext<P = {}> {
    onItemSelection?: OnItemSelectionListener<P>
    selectedPath: string
    template: ITemplateComponents
    theme: INavTheme
}