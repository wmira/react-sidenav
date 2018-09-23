
export interface INavSelectionArg<P = {}> {
    id?: string
    path: string
    payload?: P
}
export type OnNavSelectionListener<P = {}> = (arg: INavSelectionArg) => void | any
