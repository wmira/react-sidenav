import { INavProp } from "react-sidenav/types/INavProp";
import { ReactNode } from "react";
import { OnItemSelectionListener } from "react-sidenav/types/OnItemSelectionListener";

export interface INavItemProp {
    id: string
    navProp: INavProp
    level?: number
    pathId?: string
    children?: ReactNode[]
    onClick?: OnItemSelectionListener
}