
import React, { PropTypes } from 'react';

/**
 * Will enable stateful handling
 *
 */
export default function withReactRouter4(SideNavComponent) {

    class SideNavWithRR4 extends React.Component {


        static contextTypes = {
            router: PropTypes.object.isRequired
        }

        constructor(props) {
            super(props);

            this.state = { selectedId: '' };
        }

        componentDidMount() {
            const { router } = this.context;

            //const { location } = router.getState();
            //console.log(' location >> ', location);
            //router.subscribe( this.routeChanged );
            //this.setState({ selectedId: location.substring(1) });
        }

        routeChanged = () => {

        }

        render() {
            return <SideNavComponent {...this.props} selectedId={this.state.selectedId} />;
        }
    }

    return SideNavWithRR4;
}