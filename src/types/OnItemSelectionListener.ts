
export interface IOnItemSelectionArg<P = {}> {
    id?: string    
    path: string
    payload?: P
}
export type OnItemSelectionListener<P = {}> = (arg: IOnItemSelectionArg) => void | any
