
import React from 'react';
import PropTypes from 'prop-types';
import { SideNav } from './SideNav';

/**
 * converts a path /some/path to some id
 *
 * @param {*} path
 */
export const pathToArray = (path = '') => {
    //remove first char
    const sanitizedPath = path.indexOf('/') === 0 ? path.substring(1) : path;
    return sanitizedPath.split('/');

};

export const pathReducer = (acc, partial) =>  `${acc}/${partial}`;

export const withRR4 = () => {


    return class SideNavWithRR4 extends React.Component {

        static propTypes = {
            children: PropTypes.node,
            default: PropTypes.string //if the path does not match, then use this as the selected
        }

        static contextTypes = {
            router: PropTypes.shape({
                history: PropTypes.object.isRequired,
                route: PropTypes.object.isRequired
            })
        }

        constructor(props) {
            super(props);
            this.state = { selected: null };
        }

        componentDidMount() {
            const { history } = this.context.router;
            history.listen( this.onHistoryChanged );
            const { pathname } = history.location;
            this.setPathAsSelectedId(pathname, this.props.default );
        }

        setPathAsSelectedId = (pathname, defaultSelection) => {
            const pathArr = pathToArray(pathname)
            const pathArrToUse = pathArr.length === 0 ? [defaultSelection] : pathArr

            const pathAsId = pathArrToUse.reduce(pathReducer )
            this.setState({ selected: pathAsId });
        }
        onHistoryChanged = (e) => {
            const { pathname } = e;
            this.setPathAsSelectedId(pathname, this.props.default);
        }

        onItemSelection = (itemId) => {
            const { history } = this.context.router;

            //do not push history if the resulting click is the same as the current id
            const { selected } = this.state;

            if ( itemId === undefined ) return;
            if ( itemId !== selected ) {
                history.push(`/${itemId}`);
            }
        }

        render() {
            const { children, ...others } = this.props;
            return (
                <SideNav {...others} onItemSelection={this.onItemSelection} selected={this.state.selected}>
                    { children }
                </SideNav>
            );
        }
    };

};
