
import * as React from 'react'
import { fireEvent, render, cleanup } from 'react-testing-library'
import { Nav } from './Nav'
import 'jest-dom/extend-expect'
import { SideNavActionContext, SideNavContext, ViewMode } from './SideNav';

afterEach(cleanup)

describe('<Nav/>', () => {
  it('renders the child element', () => {
    const { getByTestId } = render(
      <Nav id='1'>
        <div data-testid='child'>Test</div>
      </Nav>
    )    
    getByTestId('child')
  })
  it('sets single level id when clicked', () => {

    const Provider: React.FC = (props) => {
      const [selected, setSelected] = React.useState('')
      const actionListener = (selectedPath) => {
        setSelected(selectedPath)
      }
      return (
        <SideNavContext.Provider value={{ selectedPath: selected}}>
          <SideNavActionContext.Provider value={{ onSelectionPathSelected: actionListener }}>
            { props.children }
          </SideNavActionContext.Provider>
        </SideNavContext.Provider>
      )
    }
    const { getByTestId } = render(
        <Provider>
          <Nav id='1' />
        </Provider>
    )

    fireEvent.click(getByTestId('1'))
    expect(getByTestId('1')).toHaveAttribute('data-selected', 'true')
  })

  it('renders sub nav', () => {
    const { getByTestId } = render(
      <SideNavContext.Provider value={{mode: ViewMode.normal, selectedPath: ''}}>
        <Nav id='1'>
          <div data-testid='child'>Test</div>
          <Nav id='2'>
            <div>Sub 1</div>            
          </Nav>
        </Nav>
      </SideNavContext.Provider>
    )
    expect(getByTestId('1|2'))
  })

})
