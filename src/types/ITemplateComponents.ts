
import { ComponentClass } from "react";
import { ITemplateRendererProp } from "react-sidenav/types/ITemplateRendererProp";


export interface ITemplateComponents {
    item?: ComponentClass<ITemplateRendererProp>
    children?: ComponentClass<ITemplateRendererProp>
    child?: ComponentClass<ITemplateRendererProp>
    icon?: ComponentClass<ITemplateRendererProp>
    text?: ComponentClass<ITemplateRendererProp>
    expandIndicator?: ComponentClass<ITemplateRendererProp>
}