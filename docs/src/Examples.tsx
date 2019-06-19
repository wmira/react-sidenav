import React from "react";
import styled from 'styled-components'
import { Flex as BaseFlex } from "./containers";
import { WithIcons } from './examples/WithIcons'
import { BorderIndicator } from './examples/BorderIndicator'
import { TwitterNav } from './examples/TwitterNav'
import { Compact } from './examples/Compact'
import {box as codeSandboxIcon} from 'react-icons-kit/feather/box'
import { Icon } from 'react-icons-kit'

const CodeSandboxCont = styled.div`
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;  
  & > a:hover {
    text-decoration: underline;
  }
  & > a {    
    color: #666;
    text-decoration: none;
  }
  & > a > span { 
    padding-left: 4px;
  }
  & > a:visited {
    color: #666;
  }
`

const Flex = styled(BaseFlex)`
  flex-wrap: wrap;  
`
const FlexConter = styled(Flex)`
  justify-content: center;
  align-items: center;
`

const Example: React.FC<{ id: string}> = (props) => {

  return (
    <div>      
        <CodeSandboxCont>
          <a rel="noopener noreferrer" 
            target="_blank" href={`https://codesandbox.io/s/${props.id}`}>
            <Icon icon={codeSandboxIcon} />          
            <span>Edit At CodeSandbox</span>
          </a>        
        </CodeSandboxCont>
      
        <FlexConter>
          { props.children }
        </FlexConter>
    </div>
  )
} 

export const Examples = () => {
  return (
    <>
      <Flex>
        <Example id='03xry073qw'>
          <WithIcons/>
        </Example>
        <Example id='m5yyl5rp9y'>
          <BorderIndicator/>
        </Example>
        <Example id='rkwq71854'>
          <TwitterNav/>
        </Example>
        <Example id='rkwq71854'>
          <Compact/>
        </Example>
      </Flex>
    </>
  );
};
