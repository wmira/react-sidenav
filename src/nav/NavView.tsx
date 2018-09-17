import * as React from 'react'
import { INavViewProp } from '../types/INavViewProp';
import { ISideNavStateProp } from '../types';
import { theme, NavTemplate, NavChildTemplate } from '../templates/Basic';

export class NavView extends React.PureComponent<INavViewProp> {

    constructor(props: INavViewProp) {
        super(props)

    }

    public createPath = () => {
        return this.props.parentId ? `${this.props.parentId}|${this.props.id}` : this.props.id
    }
    public render() {

        const { children, context, id } = this.props
        const { template } = this.props.context
        const isChild = this.props.parentId !== undefined
        const Template = isChild ? template.navChild || NavChildTemplate : ( template.nav || NavTemplate )
        const path = this.createPath()
        const navStateProp: ISideNavStateProp = {
            theme: context.theme || theme,
            selected: id !== undefined && context.selectedPath === path, // FIXME, parent should be considered
            expanded: undefined,
            navProp: this.props,
            level: this.props.parentId ? 1 : 0, // 1 level for now
            template: this.props.context.template
        }

        return (
            <div onClick={this.dispatchOnClick}>
                <Template { ...navStateProp }>
                    { children || null }
                </Template>
            </div>
        )
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
}