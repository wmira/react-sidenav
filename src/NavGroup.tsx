import * as React from 'react'
import { Nav } from './Nav';
import { SideNavMode, SideNavContext, ISideNavContext } from './';

enum NavGroupState {
  expanded = 'expanded',
  collapsed = 'collapsed'
}

interface INavGroupProp {
  onClick: (arg: any) => void
}

interface INavGroupChildrenProp {
  state: NavGroupState
  rootRef: React.RefObject<HTMLDivElement>
  toggleCollapsed: () => void
}

export const NavGroupChildren: React.FC<INavGroupChildrenProp> = (props) => {
  const context = React.useContext(SideNavContext)
  const ref = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    const eventListener = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if ( ref.current && !ref.current.contains(el) ) {
        props.toggleCollapsed()
      }
    }
    window.addEventListener('click', eventListener)
    return () => {
      window.removeEventListener('click', eventListener)
    }
  }, [ ref ])

  if ( context.mode === SideNavMode.compact ) {
    if ( props.state === NavGroupState.expanded ) {
      const { current } = props.rootRef
      const width = current!.clientWidth;

      return (
        <div
          ref={ref}
          style={{background: 'pink', position: 'absolute', zIndex: 100, left: width, top: 0 }}>
          { props.children }
        </div>
      )
    }
  } else {
    return (
      <div style={{display: props.state === NavGroupState.collapsed ? 'none' : 'block'}}>{ props.children }</div>
    )
  }

  return null;
}

export const NavGroup: React.FC<INavGroupProp> = (props) => {
  const { children, onClick, ...others } = props
  const [state, setState] = React.useState(NavGroupState.collapsed)
  const rootRef = React.useRef<HTMLDivElement>(null)

  const onHandleClick = (e: React.MouseEvent) => {

    if ( e ) {
      e.stopPropagation()
    }
    setState( currentState => {
      return currentState === NavGroupState.collapsed ? NavGroupState.expanded : NavGroupState.collapsed
    })
  }
  // we would want to render the main items but
  // not the children
  const navChildren = [] as React.ReactNode[]
  const nonNavChildren = [] as React.ReactNode[]

  React.Children.toArray(children).forEach( (child) => {
    const childEl = child as any
    if ( childEl.type === Nav ) {
      navChildren.push(child)
    } else {
      nonNavChildren.push(child)
    }

  })

  return (
    <div {...others} onClick={onHandleClick} ref={rootRef} style={{position: 'relative'}}>
      <div>{ nonNavChildren }</div>
      <NavGroupChildren
        toggleCollapsed={onHandleClick}
        rootRef={rootRef} 
        state={state}> 
          { navChildren }
        </NavGroupChildren>
    </div>
  )
}
