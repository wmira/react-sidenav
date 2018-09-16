import { OnItemSelectionListener } from "./OnItemSelectionListener";

export interface INavProp<P = {}> {
    className?: string
    id?: string
    payload?: P
    onClick?: OnItemSelectionListener
}