import styled from 'styled-components';
import {
  LiveProvider as BaseLiveProvider,
  LiveEditor as BaseLiveEditor,
  LiveError,
  LivePreview as BaseLivePreview
} from 'react-live'
import { SideNavCont } from './containers'
import { SideNav, Nav, NavContext } from 'react-sidenav'
import oceanicNext from 'prism-react-renderer/themes/dracula'
import * as React from 'react'

const LiveProvider = styled(BaseLiveProvider)`
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  box-shadow: 3px 3px 18px rgba(66, 22, 93, 0.3);

  @media (max-width: 599px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }

`
const LiveEditor = styled(BaseLiveEditor)`
  background: #222d32;
  flex: 3;
  font-size: 12px;
  font-family: Roboto Condensed;
  padding: 0.5rem;

  min-width: 450px;
`
const LivePreview = styled(BaseLivePreview)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 8px;
`

const scope = { styled, React, SideNavCont, SideNav, Nav, NavContext }

export const Live: React.FC<{code: string, scope?: any }> = (props) => {

  return (
    <LiveProvider
      noInline={true}
      code={props.code}
      theme={oceanicNext}
      scope={{ ...scope, ...props.scope }}
    >
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}