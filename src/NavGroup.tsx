import * as React from 'react'
import { Nav } from './Nav'
import { ViewMode, SideNavContext, NavContext } from './'
import { NavGroupChildren } from './NavGroupChildren'
import { NavGroupState, INavGroupProp, ChildrenToggleMode } from './types';


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
  const context = React.useContext(SideNavContext)
  const navContext = React.useContext(NavContext)
  const childSelected = navContext.pathId && context.selectedPath.indexOf(navContext.pathId) === 0
  const [state, setState] = React.useState(childSelected ? NavGroupState.expanded : NavGroupState.collapsed)
  const isCompact = context.mode === ViewMode.compact
  const rootRef = React.useRef<HTMLDivElement>(null)
  const isHoverToggleMode = context.childrenToggleMode === ChildrenToggleMode.hover
  const ToggleIndicatorComp = context.childrenToggleIndicator || ToggleIndicator
  React.useEffect(() => {
    if ( navContext.pathId &&
        context.mouseOverPathId && ( isHoverToggleMode || isCompact )
    ) {
        if ( navContext.pathId === context.mouseOverPathId && state === NavGroupState.collapsed ) {
          setState( () => NavGroupState.expanded);
        } else if ( !context.mouseOverPathId.startsWith(navContext.pathId) && isCompact ) {
          // collapsed if we are in compact mode only
          setState( () => NavGroupState.collapsed);
        }
    }
  }, [ context.mouseOverPathId, navContext.pathId, ChildrenToggleMode.hover ])

  const toggleState = () => {
    setState( currentState => {
      return currentState === NavGroupState.expanded ? NavGroupState.collapsed : currentState;
    })
  }
  const onHandleClick = (e?: React.MouseEvent ) => {
    if ( context.childrenToggleMode === ChildrenToggleMode.click ) {
      if ( e ) {
        e.stopPropagation()
      }
      setState( currentState => {
        return currentState === NavGroupState.collapsed ? NavGroupState.expanded : NavGroupState.collapsed
      })
    }
  }

  // we would want to render the main items but
  // not the children. The children will be taken cared
  // of navGroup
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
    <div {...others}
      // onMouseEnter={onMouseEnter}
      onClick={onHandleClick }
      ref={rootRef}
      style={{position: 'relative'}}
    >
      <div style={{position: 'relative'}}>
        { nonNavChildren }
      { isCompact ? null : <ToggleIndicatorComp collapsed={state} /> }
      </div>
      <NavGroupChildren
        toggleCollapsed={toggleState}
        rootRef={rootRef}
        state={state}>
          { navChildren }
        </NavGroupChildren>
    </div>
  )
}
