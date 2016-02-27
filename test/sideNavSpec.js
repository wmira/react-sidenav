
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { Nav } from '../src/Nav';
import { SideNav } from '../src/SideNav';
import  styles from '../src/style.css';
import should from 'should';


describe('sidenav tests', () => {

    describe( 'SideNav tests', () => {
        let navi = [
            { id: 'dashboard', icon: 'fa fa-dashboard' , text: 'Dashboard'},
            { id: 'inventory', icon: 'fa fa-database' ,text: 'Inventory'}
        ];
        it(' can build from config', () => {
            let selected = 'dashboard';

            const  renderer = createRenderer();
            renderer.render(<SideNav selected={selected} navs={navi}/>);
            const rendered = renderer.getRenderOutput();

            const { props } = rendered;

            //creates 2 children
            should(props.children.length).be.exactly(2);

            const [child1, child2] = props.children;
            const [nav1, nav2] = navi;
            //props in react is immutable, but config based sidenav
            //we generate props, so lets test it
            should(child1.props.icon).be.exactly(nav1.icon);
            should(child2.props.icon).be.exactly(nav2.icon);

            should(child1.props.text).be.exactly(nav1.text);
            should(child2.props.text).be.exactly(nav2.text);

            should(child1.props.id).be.exactly(nav1.id);
            should(child2.props.id).be.exactly(nav2.id);

            should(child1.props.selected).be.exactly(selected);
            should(child2.props.selected).be.exactly(selected);
        });

        it('can dispatch click ', () => {
            let selected = {id: 'dashboard' };
            const  renderer = createRenderer();
            renderer.render(<SideNav onSelection={ (s) => selected=s } selected={selected.id} navs={navi}/>);
            let rendered = renderer.getRenderOutput();
            const { props } = rendered;
            const [child1, child2] = props.children;
            should(child1.props.selected).be.exactly(selected.id);
            should(child2.props.selected).be.exactly(selected.id);

            child2.props.onClick('inventory');

            should(selected.id).be.exactly('inventory');

        });
    });

    describe( 'Nav tests', () => {

        it('renders non active nav', () => {
            const  renderer = createRenderer();
            renderer.render(<Nav text='T' id='x' selected='y'/>);
            const rendered = renderer.getRenderOutput();
            const props = rendered.props;
            should(rendered.type).be.equal('div');
            should(props.className).be.equal(styles['sidenav-item']);
            //on click is binded
            should(props.onClick).be.ok();
        });

        it('activates nav item', () => {
            const  renderer = createRenderer();
            renderer.render(<Nav text='T' id='x' selected='x'/>);
            const rendered = renderer.getRenderOutput();
            const props = rendered.props;
            should(rendered.type).be.equal('div');
            should(props.className).be.equal(styles['sidenav-item'] + ' ' + styles['active']);
            should(props.onClick).be.ok();

        });

        it('dispatches click', () => {
            const checker = () => {
                let payload;
                return {
                    get payload() {
                        return payload;
                    },
                    onClick(clickRes) {
                        payload = clickRes;
                    }
                };
            };
            const clickInspect = checker();
            const  renderer = createRenderer();
            renderer.render(<Nav onClick={clickInspect.onClick} text='T' id='x' selected='x'/>);
            const rendered = renderer.getRenderOutput();
            const props = rendered.props;
            should(rendered.type).be.equal('div');
            should(props.className).be.equal(styles['sidenav-item'] + ' ' + styles['active']);
            should(props.onClick).be.ok();

            props.onClick();
            should(clickInspect.payload).be.exactly('x');

        });
    });
});
