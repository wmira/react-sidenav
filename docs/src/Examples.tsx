import React from "react";

import { Flex } from "./containers";
import { WithIcons } from './examples/WithIcons'

const Example: React.FC = (props) => {

  return (
    <div>{ props.children }</div>
  )
} 

export const Examples = () => {
  return (
    <>
      <Flex>
        <Example>
          <WithIcons/>
        </Example>
      </Flex>
    </>
  );
};
