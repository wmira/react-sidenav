import * as React from 'react'
import {
  OnSelectionListener,
  ViewMode,
  ISelectionPathData,
  ISideNavActionContext,
  ChildrenToggleMode,
  ISideNavContext
} from './types'

export const SideNavActionContext = React.createContext<ISideNavActionContext>(null as any as ISideNavActionContext)
export const SideNavContext = React.createContext<ISideNavContext>(null as any as ISideNavContext)

interface ISideNavProp {
  onSelection?: OnSelectionListener
  mode?: ViewMode
  defaultSelectedPath?: string
  childrenToggleMode?: ChildrenToggleMode
  childrenToggleIndicator?: React.ComponentType
}
export const SideNav: React.FC<ISideNavProp> = (props) => {

  const [state, setState] = React.useState<ISideNavContext>({
    selectedPath: props.defaultSelectedPath || '',
    mode: props.mode || ViewMode.normal,
    childrenToggleMode: props.childrenToggleMode || ChildrenToggleMode.hover,
    childrenToggleIndicator: props.childrenToggleIndicator
  })

  const onSelectionPathSelected = (path: string, selectionData: ISelectionPathData) => {
    if ( props.onSelection ) {
      props.onSelection(path, selectionData)
    }
    setState((currentState) => {
      return { ...currentState, selectedPath: path }
    })
  }

  const onMouseOver = (e: any) => {
    let mouseOverPathId;
    let current = e.target;
    while ( current && current.getAttribute ) {
      const pathId = current.getAttribute('data-pathid')
      if ( pathId ) {
        mouseOverPathId = pathId
        break;
      }
      current = current.parentNode
    }
    if ( mouseOverPathId && state.mouseOverPathId !== mouseOverPathId ) {
      setState({ ...state, mouseOverPathId })
    }
  }
  React.useEffect(() => {
    setState({ ...state, mode: props.mode || ViewMode.normal })
  }, [ props.mode ] )
  React.useEffect(() => {
    setState({ ...state, selectedPath: props.defaultSelectedPath || '' })
  }, [ props.defaultSelectedPath ] )
  React.useEffect(() => {
    setState({ ...state, childrenToggleIndicator: props.childrenToggleIndicator })
  }, [ props.childrenToggleIndicator ] )

  return (
    <SideNavContext.Provider value={state}>
      <SideNavActionContext.Provider value={{ onSelectionPathSelected }}>
        <aside
          onMouseOver={onMouseOver}
          data-selected-path={state.selectedPath}
          data-testid='sidenav-root'
        >
          { props.children }
        </aside>
      </SideNavActionContext.Provider>
    </SideNavContext.Provider>
  )
}
