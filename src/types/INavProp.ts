import { OnItemSelectionListener } from "./OnItemSelectionListener";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";

export interface INavProp<P = {}> {
    id: string
    selectable?: boolean // defaults to true
    payload?: P
    onClick?: OnItemSelectionListener
    template?: ITemplateComponents // assign a template
    className?: string
}