import { INavProp, INavTheme, ITemplateComponents } from "react-sidenav/types";
import { INavItemProp } from "react-sidenav/types/INavItemProp";
import { Scheme } from "react-sidenav/types/Scheme";
import { PATH_SEPARATOR } from '../constants'


const getDefaultPathSeparator = (overridenPathSep: string | undefined) => {
  if ( overridenPathSep ) {
    return overridenPathSep
  }
  return PATH_SEPARATOR
}

export const createNavItemProp = (props: INavProp,
                                theme: INavTheme,
                                template: ITemplateComponents,
                                selectedPath: string | undefined,
                                pathSeparator: string | undefined,
                                parentPathId: string | undefined,
                                scheme: Scheme = Scheme.default): INavItemProp => {
    const pathArr = parentPathId ? parentPathId.split(getDefaultPathSeparator(pathSeparator)) : []
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