import { INavProp } from "./INavProp";
import { INavTheme } from "./INavTheme";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";


export interface ISideNavStateProp {
    selected: boolean
    expanded: boolean | undefined
    parentId?: string | undefined
    navProp: INavProp
    theme?: INavTheme
    level: number
    template?: ITemplateComponents
}
