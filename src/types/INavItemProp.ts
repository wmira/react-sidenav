import { INavProp } from "react-sidenav/types/INavProp";
import { ReactNode } from "react";
import { OnNavItemSelectionListener } from "react-sidenav/types/OnNavItemSelectionListener";
import { INavTheme } from "react-sidenav/types/INavTheme";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";
import { Scheme } from "react-sidenav/types/Scheme";

export interface INavItemProp {
    navProp: INavProp
    level: number
    pathId: string
    children?: ReactNode[] | ReactNode
    theme: INavTheme
    template: ITemplateComponents // the template to use
    scheme: Scheme
    selected: boolean
    expanded: boolean | undefined
    parentPathId?: string
    isLeaf: boolean
}