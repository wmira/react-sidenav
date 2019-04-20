import * as React from 'react'

export { Nav, NavContext } from './Nav'
export enum SideNavMode {
  normal = 'normal',
  compact = 'compact'
}

type OnSelectionListener = (selection: string) => void

export interface ISideNavContext {
  selection: string
  mode?: SideNavMode
}

export interface ISideNavActionContext {
  onSelectionPathSelected: (path: string) => void
}

export const SideNavActionContext = React.createContext<ISideNavActionContext>(null as any as ISideNavActionContext)
export const SideNavContext = React.createContext<ISideNavContext>(null as any as ISideNavContext)

interface ISideNavProp {
  onSelection?: OnSelectionListener
  mode?: SideNavMode
}

export const SideNav: React.FC<ISideNavProp> = (props) => {

  const [state, setState] = React.useState({ selection: '', mode: props.mode || SideNavMode.normal })

  const onSelectionPathSelected = (path: string) => {
    setState((currentState) => ({ ...currentState, selection: path }))
  }

  React.useEffect(() => {
    if ( state.selection && props.onSelection ) {
      props.onSelection(state.selection)
    }
  }, [ state.selection, props.onSelection ])

  React.useEffect(
    React.useCallback(
      () => {
        if ( props.mode ) {
          setState({ ...state, mode: props.mode })
        }
      },
      [ props.mode ]
    ),
    [ props.mode ]
  )

  return (
    <SideNavContext.Provider value={state}>
      <SideNavActionContext.Provider value={{ onSelectionPathSelected }}>
        <aside
          data-selected-path={state.selection}
          data-testid='sidenav-root'>{ props.children }
        </aside>
      </SideNavActionContext.Provider>
    </SideNavContext.Provider>
  )
}
