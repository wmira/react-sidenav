
import React from 'react';
import { render } from 'react-dom';

import styled from 'styled-components';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';

const Icon20 = (props) => (<SvgIcon size={props.size || 20} icon={props.icon} />);

const BaseContainer = props => <div style={{display: 'inline-block', paddingTop: 16, paddingBottom: 16, fontFamily: 'Roboto', width: 240, ...props.style}}>{props.children}</div>;

const Title = styled.div`
    padding: 12px;    
`;

const Separator = styled.div`
    padding-right: 12px;
`;
const SeparatorTitleContainer = styled.div`
    font-size: 14px;
    color: #AAA;
    margin: 10px 12px;
    padding: 4px 12px 2px;
`;
const SeparatorTitle = (props) => {
    return (
        <SeparatorTitleContainer>
            { props.children }
            <hr style={{border: 0, borderTop: '1px solid #E5E5E5'}}/>
        </SeparatorTitleContainer>
    );
};

class X extends React.Component {

    render() {

        return (
            <div style={{display: 'flex'}}>
                <BaseContainer style={{background: '#2c3e50', color: '#FFF'}}>
                    <SideNav highlightBgColor='#00bcd4' defaultSelected='sales'>
                        <Title> Basic SideNav </Title>
                        <Nav id='dashboard'>
                            <NavIcon><Icon20 icon={ic_aspect_ratio}/></NavIcon><NavText> Dashboard </NavText>
                        </Nav>
                        <Nav id='sales'>
                            <NavIcon><Icon20 icon={ic_business}/></NavIcon><NavText> Sales </NavText>
                        </Nav>
                        <Nav id='products'>
                            <NavIcon><Icon20 icon={ic_business_center}/></NavIcon><NavText> Products </NavText>
                        </Nav>
                        <Nav id='customers'>
                            <NavIcon><Icon20 icon={ic_people}/></NavIcon><NavText> Customers </NavText>
                            <Nav id='dashboard2'>
                                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio}/></NavIcon><NavText> Search </NavText>
                            </Nav>
                            <Nav id='sales2'>
                                <NavIcon><Icon20 size={16} icon={ic_business}/></NavIcon><NavText> Promote </NavText>
                            </Nav>
                            <Nav id='products2'>
                                <NavIcon><Icon20 size={16} icon={ic_business_center}/></NavIcon><NavText> Social Media </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='orders'>
                            <NavIcon><Icon20 icon={ic_format_list_bulleted}/></NavIcon><NavText> Orders </NavText>
                        </Nav>
                    </SideNav>
                </BaseContainer>
                <Separator/>
                <BaseContainer style={{background: '#FFF', color: '#444', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}}>
                    <SideNav highlightBgColor='#eee' defaultSelected='products' highlightColor='#E91E63'>
                         <SeparatorTitle>
                            <div>Main</div>
                        </SeparatorTitle>
                        <Nav id='dashboard'>
                            <NavIcon><Icon20 icon={ic_aspect_ratio}/></NavIcon><NavText> Dashboard </NavText>
                        </Nav>

                        <Nav id='products'>
                            <NavIcon><Icon20 icon={ic_business_center}/></NavIcon><NavText> Products </NavText>
                        </Nav>
                        <Nav id='orders'>
                            <NavIcon><Icon20 icon={ic_format_list_bulleted}/></NavIcon><NavText> Orders </NavText>
                        </Nav>
                        <SeparatorTitle>
                            <div> Customers and Sales</div>
                        </SeparatorTitle>
                        <Nav id='customers'>
                            <NavIcon><Icon20 icon={ic_people}/></NavIcon><NavText> Customers </NavText>
                            <Nav id='dashboard2'>
                                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio}/></NavIcon><NavText> Search </NavText>
                            </Nav>
                            <Nav id='sales2'>
                                <NavIcon><Icon20 size={16} icon={ic_business}/></NavIcon><NavText> Promote </NavText>
                            </Nav>
                            <Nav id='products2'>
                                <NavIcon><Icon20 size={16} icon={ic_business_center}/></NavIcon><NavText> Social Media </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='sales'>
                            <NavIcon><Icon20 icon={ic_business}/></NavIcon><NavText> Sales </NavText>
                        </Nav>
                    </SideNav>
                </BaseContainer>
                <Separator/>
                <BaseContainer style={{fontSize: 12, background: '#2d353c', color: '#a8acb1', paddingTop: 0}}>
                    <div style={{display: 'flex', padding: 16,background: '#1a2229'}}>
                        <div style={{width: 40, height: 40}}>
                            <img src='https://e27.co/img/profiles/15483/profile_pic.png' style={{borderRadius: '30px', width: 40, height: 40}}/>
                        </div>
                        <div style={{paddingLeft: 6, paddingTop: 6}}>
                            <div style={{fontSize: 12, color: '#E5E5E5'}}> Warren Mira </div>
                            <div style={{fontSize: 11}}> Ninja Developer </div>
                        </div>
                    </div>
                    <SideNav hoverBgColor='#232a2f' highlightBgColor='#00acac' defaultSelected='products' highlightColor='#FFF'>
                        <div></div>
                        <Nav id='dashboard'>
                            <NavIcon><Icon20 icon={ic_aspect_ratio}/></NavIcon><NavText> Dashboard </NavText>
                        </Nav>

                        <Nav id='products'>
                            <NavIcon><Icon20 icon={ic_business_center}/></NavIcon><NavText> Products </NavText>
                        </Nav>
                        <Nav id='orders'>
                            <NavIcon><Icon20 icon={ic_format_list_bulleted}/></NavIcon>
                            <NavText> <span style={{paddingRight: 6}}>Orders</span> <span style={{ textAlign: 'center', lineHeight: '16px', height: 16, width: 16, margin: '0 auto', borderRadius: '50%', fontSize: 9, display: 'inline-block', color: '#FFF', background:'#ff5b57'}}>10</span></NavText>
                        </Nav>

                        <Nav id='customers'>
                            <NavIcon><Icon20 icon={ic_people}/></NavIcon><NavText> Customers </NavText>
                            <Nav id='dashboard2'>
                                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio}/></NavIcon><NavText> Search </NavText>
                            </Nav>
                            <Nav id='sales2'>
                                <NavIcon><Icon20 size={16} icon={ic_business}/></NavIcon><NavText> Promote </NavText>
                            </Nav>
                            <Nav id='products2'>
                                <NavIcon><Icon20 size={16} icon={ic_business_center}/></NavIcon><NavText> Social Media </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='sales'>
                            <NavIcon><Icon20 icon={ic_business}/></NavIcon><NavText> Sales </NavText>
                        </Nav>
                        <Nav id='deliveries'>
                            <NavIcon><Icon20 icon={ic_shopping_cart}/></NavIcon><NavText> Deliveries </NavText>
                        </Nav>
                    </SideNav>

                </BaseContainer>
            </div>
        );
    }
}


render(<X/>, document.getElementById('app'));