import { OnItemSelectionListener } from "./OnItemSelectionListener";
import { ITemplate } from "./ITemplate";


export interface ISideNavContext<P = {}> {
    onItemSelection?: OnItemSelectionListener<P>
    selectedPath: string
    template: ITemplate
}