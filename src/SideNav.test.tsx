
import * as React from 'react'
import { fireEvent, render, cleanup, getByTestId } from 'react-testing-library'
import { Nav } from './Nav'
import { SideNav, ViewMode } from './SideNav'
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('<SideNav/>', () => {
  it('renders any items', () => {
    const { getByTestId } = render(
      <SideNav>
        <Nav id='1'>
          <div>Item</div>I
        </Nav>
        <div data-testid='nonNavChild'/>
      </SideNav>
    )
    
    getByTestId('nonNavChild')
  })

  it('calls onItemSelection event when a nav is clicked', () => {
    const listener = jest.fn()
    const { getByTestId } = render(
      <SideNav onSelection={listener}>
        <Nav id='1'>
          <div>Item</div>I
        </Nav>
      </SideNav>
    )

    fireEvent.click(getByTestId('1'))
    expect(listener).toHaveBeenCalledWith('1', { id: "1", isLeaf: true, level: 1, payload: undefined})
  })

  it('renders sub menu', () => {
    const listener = jest.fn()
    const { debug, getByTestId, queryByTestId } = render(
      <SideNav onSelection={listener}>
        <Nav id='1'>
          <div>Item</div>I
          <Nav id='1'>
            <div>Item 2</div>
          </Nav>
        </Nav>      
      </SideNav>
    )
    const childNavEl = getByTestId('1|1')
    const subNavContainerEl = childNavEl.parentElement
    expect(subNavContainerEl.getAttribute('data-navgroupstate')).toEqual('collapsed')
    
    fireEvent.click(getByTestId('1'))

    expect(subNavContainerEl.getAttribute('data-navgroupstate')).toEqual('expanded')

  })

  it('does not render sub menu in compact mode', () => {
    const { queryByTestId } = render(
      <SideNav mode={ViewMode.compact}>
        <Nav id='1'>
          <div>Item</div>I
          <Nav id='1'>
            <div>Item 2</div>
          </Nav>
        </Nav>      
      </SideNav>
    )
    expect(queryByTestId('1|1')).toBeFalsy()
  })
  it('renders sub menu in compact mode when expanded', () => {
    const { queryByTestId, getByTestId } = render(
      <SideNav mode={ViewMode.compact}>
        <Nav id='1'>
          <div>Item</div>I
          <Nav id='1'>
            <div>Item 2</div>
          </Nav>
        </Nav>      
      </SideNav>
    )
    expect(queryByTestId('1|1')).toBeFalsy()
    fireEvent.click(getByTestId('1'))
    getByTestId('1|1')
  })

  it('can select defaultSelectedPath with sub menu', () => {
    const { debug, getByTestId, queryByTestId } = render(
      <SideNav defaultSelectedPath='1|1'>
        <Nav id='1'>
          <div>Item</div>I
          <Nav id='1'>
            <div>Item 2</div>
          </Nav>
        </Nav>      
      </SideNav>
    )
    const subMenuEl = getByTestId('1|1')
    expect(subMenuEl.getAttribute('data-selected')).toEqual("true")
  })

  it('can select defaultSelectedPath with top level menu', () => {
    const { getByTestId } = render(
      <SideNav defaultSelectedPath='2'>
        <Nav id='1'>
          <div>Item</div>I         
        </Nav>      
        <Nav id='2'>
            <div>Item 2</div>
          </Nav>
      </SideNav>
    )
    const subMenuEl = getByTestId('2')
    expect(subMenuEl.getAttribute('data-selected')).toEqual("true")
  })

  it('collapse submenu when clicked outside', () => {
    const { container, queryByTestId, getByTestId } = render(
      <SideNav mode={ViewMode.compact}>
        <Nav id='1'>
          <div>Item</div>I
          <Nav id='1'>
            <div>Item 2</div>
          </Nav>
        </Nav>      
      </SideNav>
    )
    expect(queryByTestId('1|1')).toBeFalsy()
    fireEvent.click(getByTestId('1'))
    getByTestId('1|1')
    
    fireEvent.click(container)
    expect(queryByTestId('1|1')).toBeFalsy()
  })
})
