
import { injectGlobal } from 'styled-components'

export const init = () => {

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
    html, body {
    margin: 0;
    padding: 12px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #333;
    font-family: 'Roboto Condensed', sans-serif;
    }
    #root {
    width: 100%;
    height: 100%;
    }
    * {
    box-sizing: border-box;
    }
`
}