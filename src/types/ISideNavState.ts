import { INavProp } from "./INavProp";
import { INavTheme } from "./INavTheme";


export interface ISideNavStateProp {
    isSelectedPath: boolean
    isExpanded: boolean | undefined
    parentId?: string | undefined
    navProp: INavProp
    theme: INavTheme 
}