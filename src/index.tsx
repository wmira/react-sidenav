import * as React from 'react'

export { Nav, NavContext } from './Nav'

export interface ISideNavContext {
  selection: string
}

export interface ISideNavActionContext {
  onSelectionPathSelected: (path: string) => void
}

export const SideNavActionContext = React.createContext<ISideNavActionContext>(null as any as ISideNavActionContext)
export const SideNavContext = React.createContext<ISideNavContext>(null as any as ISideNavContext)

export const SideNav: React.FC = (props) => {

  const [state, setState] = React.useState({ selection: ''})
  const onSelectionPathSelected = (path: string) => {
    setState((currentState) => ({ ...currentState, selection: path }))
  }
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

