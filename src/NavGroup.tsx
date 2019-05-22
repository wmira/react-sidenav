import * as React from 'react'
import { Nav } from './Nav';
import { ViewMode, SideNavContext, NavContext } from './';

export enum NavGroupState {
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

const ChildrenIndicatorIcon: React.FC<{size?: number}> = (props) => {
  const style = { width: props.size || 16, height: props.size || 16 }
  return (
    <i style={style}>
      <svg
        fill="currentColor"
        style={style}
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}>
        <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" />
      </svg>
    </i>
  )
}
const StyleCollapsed = Object.freeze({
  maxHeight: 0,
  transition: 'max-height 0.3s ease-out',
  overflow: 'hidden',
})
const StyleExpanded = Object.freeze({
  overflow: 'hidden',
  maxHeight: '1000px',
  transition: 'max-height 0.5s ease-in'
})

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

  if ( context.mode === ViewMode.compact ) {
    if ( props.state === NavGroupState.expanded ) {
      const { current } = props.rootRef
      const width = current!.clientWidth;

      return (
        <div
          ref={ref}
          style={{
            background: ref.current ? ref.current.style.background: '#FFF',
            width,
            position: 'absolute',
            zIndex: 100,
            left: width+ 1,
            top: 0 } as any}>
          { props.children }
        </div>
      )
    }
  } else {

    const style = props.state === NavGroupState.collapsed ? StyleCollapsed : StyleExpanded
    return (
      <div
        data-navgroupstate={props.state}
        style={style}>
        { props.children }
      </div>
    )
  }

  return null;
}
const ToggleIndicatorStyle = {
  top: 0,
  right: 8,
  width: 4,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: "absolute",
  transition: "all 0.2s linear"
}


const ToggleIndicator: React.FC<{collapsed: NavGroupState}> = (props) => {
  const transform = props.collapsed === NavGroupState.collapsed ? "rotate(0deg)" : "rotate(90deg)"
  return (
    <div style={{ ...ToggleIndicatorStyle, transform } as any} >
      <ChildrenIndicatorIcon />
    </div>
  )
}

export const NavGroup: React.FC<INavGroupProp> = (props) => {
  const { children, onClick, ...others } = props
  const { selectedPath } = React.useContext(SideNavContext)
  const { pathId } = React.useContext(NavContext)
  const childSelected = pathId && selectedPath.indexOf(pathId) === 0
  const [state, setState] = React.useState(childSelected ? NavGroupState.expanded : NavGroupState.collapsed)
  const rootRef = React.useRef<HTMLDivElement>(null)

  const onHandleClick = (e?: React.MouseEvent ) => {

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
    <div {...others} onClick={onHandleClick } ref={rootRef} style={{position: 'relative'}}>
      <div style={{position: 'relative'}}>
        { nonNavChildren }
        <ToggleIndicator collapsed={state} />
      </div>
      <NavGroupChildren
        toggleCollapsed={onHandleClick}
        rootRef={rootRef}
        state={state}>
          { navChildren }
        </NavGroupChildren>
    </div>
  )
}
