import { INavProp } from "react-sidenav/types/INavProp";
import { INavTheme } from "react-sidenav/types/INavTheme";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";
import { Scheme } from "react-sidenav/types/Scheme";


export interface INavStateProp {
    selected: boolean
    pathId: string // the path id, e.g. {id1}${id2} etc
    expanded: boolean | undefined // if this is expanded, for leaf node, this will be undefined
    navProp: INavProp
    theme: INavTheme
    level: number // e.g. the level of this, starts from 0 for top level
    template: ITemplateComponents // the template to use
    scheme: Scheme
}
