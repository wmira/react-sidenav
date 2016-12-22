
import React, { PropTypes } from 'react';
import { NavItem } from './NavItem';
import { createNavItems } from './createNavItems';

const EXTRA_GROUP_STYLE = {padding: '10px 0px 0px 10px', margin: '0px -18px 0px -30px'};

export class NavGroup extends React.Component {

    static propTypes = {
        children: PropTypes.node,
        selectedId: PropTypes.string,
        onClick: PropTypes.func,
        text: PropTypes.string,
        icon: PropTypes.string,
        onClick: PropTypes.func,
        highlightScheme: PropTypes.string,
        scheme: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = { collapsed: false, computedHeight: 0 };
    }
    componentDidMount() {

        if ( typeof document !== 'undefined' ) {
            const cloned = this.refs.cont.cloneNode(true);
            cloned.style.position = 'absolute';
            cloned.style.left = '-9999px';
            cloned.style.height = 'auto';
            document.body.appendChild(cloned);

            this.setState({computedHeight: cloned.clientHeight });
            document.body.removeChild(cloned);
        }
    }

    onClick = () => {
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {

        const { collapsed, computedHeight: height } = this.state;
        const style = collapsed ? { height, ...EXTRA_GROUP_STYLE} : {height: 0};
        const { selectedId, onClick, children, highlightScheme, scheme } = this.props;

        return (
            <NavItem isGroupSection={true}>
                <ul className={'rui-snav'}>
                    <NavItem isGroupSection={true}
                        scheme={scheme} onClick={this.onClick} text={this.props.text}
                        icon={this.props.icon}
                        style={{padding: '0px 0px', borderLeft: 0}}/>
                </ul>
                <ul ref='cont' style={style} className={'rui-snav rui-snav-grp'}>
                    {createNavItems({ children, onClick, highlightScheme, scheme,
                        selectedId, style: { paddingLeft: 24 } })}
                </ul>
            </NavItem>
        );
    }
}
