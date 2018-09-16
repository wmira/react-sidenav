import { INavProp } from "./INavProp";
import { ISideNavContext } from "./ISideNavContext";

export interface INavViewProp extends INavProp {
    context: ISideNavContext
    parentId?: string
}