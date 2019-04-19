import * as React from 'react'
import { Nav } from './Nav';

enum NavGroupState {
  expanded = 'expanded',
  collapsed = 'collapsed'
}

interface INavGroupProp {
  onClick: (arg: any) => void
}

export const NavGroup: React.FC<INavGroupProp> = (props) => {
  const { children, onClick, ...others } = props
  const [state, setState] = React.useState(NavGroupState.collapsed)
  const onHandleClick = () => {
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
    <div {...others} onClick={onHandleClick}>
      <div>{ nonNavChildren }</div>
      <div style={{display: state === NavGroupState.collapsed ? 'none' : 'block'}}>{ navChildren }</div>
    </div>
  )
}
