import * as React from 'react'

export enum ViewMode {
  normal = 'normal',
  compact = 'compact'
}
interface ISelectionPathData<P = {}> {
  id: string
  level: number
  isLeaf: boolean
  payload?: P
}
type OnSelectionListener = (selectionPath: string, selectionPathData: ISelectionPathData) => void

export interface ISideNavContext {
  selectedPath: string
  mode?: ViewMode
  /**
   * Path separator to use for selectionPath
   * Default is |
   */
  pathSeparator?: string
}

export interface ISideNavActionContext {
  onSelectionPathSelected: (path: string, selectionPathData: ISelectionPathData) => void
}

export const SideNavActionContext = React.createContext<ISideNavActionContext>(null as any as ISideNavActionContext)
export const SideNavContext = React.createContext<ISideNavContext>(null as any as ISideNavContext)

interface ISideNavProp {
  onSelection?: OnSelectionListener
  mode?: ViewMode
  defaultSelectedPath?: string
}
export const SideNav: React.FC<ISideNavProp> = (props) => {

  const [state, setState] = React.useState<ISideNavContext>({ selectedPath: props.defaultSelectedPath || '', mode: props.mode || ViewMode.normal })

  const onSelectionPathSelected = (path: string, selectionData: ISelectionPathData) => {
    if ( props.onSelection ) {
      props.onSelection(path, selectionData)
    }
    setState((currentState) => {
      return { ...currentState, selectedPath: path }
    })
  }

  React.useEffect(() => {
    if ( props.mode ) {
      setState({ ...state, mode: props.mode })
    }
  }, [ props.mode ] )

  return (
    <SideNavContext.Provider value={state}>
      <SideNavActionContext.Provider value={{ onSelectionPathSelected }}>
        <aside
          data-selected-path={state.selectedPath}
          data-testid='sidenav-root'>{ props.children }
        </aside>
      </SideNavActionContext.Provider>
    </SideNavContext.Provider>
  )
}
