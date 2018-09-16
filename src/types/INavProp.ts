import { OnItemSelectionListener } from "./OnItemSelectionListener";
import { ITemplateComponents } from "react-sidenav/types/ITemplateComponents";

export interface INavProp<P = {}> {
    id: string
    payload?: P
    onClick?: OnItemSelectionListener
    template?: ITemplateComponents
}