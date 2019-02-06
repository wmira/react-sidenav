import { OnNavSelectionListener } from "./OnItemSelectionListener";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";
import { INavTheme } from "react-sidenav/types/INavTheme";
import { Scheme } from "react-sidenav/types/Scheme";
import { ComponentClass } from "react";
import { ITemplateRendererProp } from "./ITemplateRendererProp";

export interface ITemplateComponentsContext extends ITemplateComponents {
  item: ComponentClass<ITemplateRendererProp>
  children: ComponentClass<ITemplateRendererProp>
}

export interface ISideNavContext<P = {}> {
    onItemSelection?: OnNavSelectionListener<P>
    selectedPath: string | undefined
    template: ITemplateComponentsContext
    theme: INavTheme
    scheme: Scheme
    expandOnHover?: boolean
}