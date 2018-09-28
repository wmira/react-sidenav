
import { ComponentClass } from "react";
import { INavTheme } from "react-sidenav/types/INavTheme";
import { ITemplateRendererProp } from "react-sidenav/types/ITemplateRendererProp";


export interface ITemplateComponents<T extends INavTheme = INavTheme> {
    item?: ComponentClass<ITemplateRendererProp>
    children?: ComponentClass<ITemplateRendererProp>
    child?: ComponentClass<ITemplateRendererProp>
    icon?: ComponentClass<ITemplateRendererProp>
    text?: ComponentClass<ITemplateRendererProp>
    expandIndicator?: ComponentClass<ITemplateRendererProp>
}