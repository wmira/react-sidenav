import { INavProp, INavTheme, ITemplateComponents } from "react-sidenav/types";
import { INavItemProp } from "react-sidenav/types/INavItemProp";
import { Scheme } from "react-sidenav/types/Scheme";

export const createNavItemProp = (props: INavProp,
                                theme: INavTheme,
                                template: ITemplateComponents,
                                selectedPath?: string,
                                pathSeparator?: string,
                                parentPathId?: string | undefined,
                                scheme?: Scheme): INavItemProp => {
    const pathArr = parentPathId ? parentPathId.split(pathSeparator) : []
    const pathId = parentPathId ? `${parentPathId}${pathSeparator}${props.id}` : `${props.id}`

    return {
        navProp: props,
        pathId,
        level: pathArr.length,
        theme,
        template,
        scheme,
        selected: pathId === selectedPath,
        expanded: undefined,
        isLeaf: true
    }

}