import { INavItemProp } from "react-sidenav/types/INavItemProp";
import { MouseEventHandler } from "react";

export interface ITemplateRendererProp extends INavItemProp {
    onClick?: MouseEventHandler
}