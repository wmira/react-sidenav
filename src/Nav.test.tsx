
import * as React from 'react'
import { fireEvent, render, cleanup } from 'react-testing-library'
import { Nav } from './Nav'
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('<Nav/>', () => {
  it('renders the child element', () => {
    const instance = render(
      <Nav id='1'>
        <div data-testid='child'>Test</div>
      </Nav>
    )
    const { getByTestId } = instance
    getByTestId('child')
  })
  it('sets single level id when clicked', () => {
    const instance = render(
      <Nav id='1' />
    )
    const { getByTestId } = instance

    fireEvent.click(getByTestId('1'))
    expect(getByTestId('1')).toHaveAttribute('data-selected', 'true')
  })

})
