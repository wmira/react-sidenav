import { OnItemSelectionListener } from "react-sidenav/types";
import { Scheme } from "react-sidenav/types/Scheme";

export interface IExampleProp {
    selectionPath: string
    onItemSelection: OnItemSelectionListener
    scheme?: Scheme
}