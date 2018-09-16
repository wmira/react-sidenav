import * as React from 'react'
import { INavViewProp } from '../types/INavViewProp';
import { ISideNavStateProp } from '../types';
import { theme, NavTemplate } from '../templates/Basic';

export class NavView extends React.PureComponent<INavViewProp> {
    
    constructor(props: INavViewProp) {
        super(props)
        
    }

    public createPath = () => {
        return this.props.parentId ? `${this.props.parentId}|${this.props.id}` : this.props.id
    }

    private dispatchOnClick = () => {
        
        const arg = {
            id: this.props.id, 
            path: this.createPath(),
            payload: this.props.payload
        }
        if ( this.props.onClick ) {
            try {
                this.props.onClick({ ...arg })
            } catch ( e ){
                // ignored
            }
        }
        
        if ( this.props.context.onItemSelection  ) {
            this.props.context.onItemSelection(arg)
        }
    }
    public render() {
        
        const { className, children, context, id } = this.props
        const Template = this.props.context.template.nav || NavTemplate
        const path = this.createPath()
        const navStateProp: ISideNavStateProp = {
            theme: context.template.theme || theme,
            isSelectedPath: id !== undefined && context.selectedPath === path, // FIXME, parent should be considered
            isExpanded: undefined,
            navProp: this.props,
            level: this.props.parentId ? 1 : 0 // 1 level for now
        }
        console.log('Template ', children)
        return (
            <div 
                onClick={this.dispatchOnClick} 
                className={className}>
                <Template { ...navStateProp }>
                    { children || null }
                </Template>
            </div>
        )
    }
}