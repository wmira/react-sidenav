
import * as React from 'react'
import styled from 'styled-components'

export const Container = styled.div`

    border-top: 2em solid #2B333E;
    box-shadow: 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.4);
    position: relative;
    border-radius: 3px 3px 0 0;
    height: 100%;
    width: 100%;

    &::before {
        display: block;
        position: absolute;
        content: '';
        top: -1.25em;
        left: 1em;
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: #2EC4B6;
        box-shadow: 0 0 0 2px #2EC4B6, 1.5em 0 0 2px #FF9F1C, 3em 0 0 2px #E71D36;
    }
`

export const Body = styled.div`
    display: flex;
    height: 100%;
`

export const Text = styled.div`
    text-align: center;
`