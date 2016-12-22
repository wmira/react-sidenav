
import React, { Children, cloneElement } from 'react';
import { NavSection } from './NavSection';
import { NavItem } from './NavItem';
import { SNav } from './Nav';
const noop = () => {};

const navItemCloner = ({ onClick, selectedId, style, highlightScheme, scheme }) => child => {
    return cloneElement(child, {onClick, selectedId, style, scheme, highlightScheme});
};

export const createNavItems = ({ children, onClick, selectedId, style = {}, highlightScheme, scheme }) => {
    const cloneNavItem = navItemCloner({ onClick, selectedId, style, highlightScheme, scheme });
    return Children.map( children, child => {
        if ( child.type === NavSection ) {
            const grandC = child.props.children;
            const sectionE = <NavItem selectedId={selectedId} onClick={noop} scheme={scheme}
                    highlightScheme={highlightScheme}><SNav {...child.props} /></NavItem>;
            return [sectionE, ...Children.map(grandC,cloneNavItem) ];
        }
        return cloneNavItem(child);
    });
};
