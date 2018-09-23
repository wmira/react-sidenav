import { OnNavSelectionListener } from "./OnItemSelectionListener";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";

export interface INavProp<P = {}> {
    id: string
    selectable?: boolean // defaults to true
    payload?: P
    onClick?: OnNavSelectionListener
    template?: ITemplateComponents // assign a template
    className?: string
}