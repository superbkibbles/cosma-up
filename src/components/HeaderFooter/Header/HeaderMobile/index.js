import React, { Suspense } from 'react';
import {Col, Container, Row} from "react-bootstrap";

import Cart from '../../../../assets/svgs/Cart';
import Search from "../../../../assets/svgs/Search";
import Menu from "../../../../assets/svgs/Menu";
import Logo from "../../../../assets/svgs/logo";
// import SearchBox from "../../../SearchBox";
import SideBar from "./SideBar";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideBar: false
        }
    }
    // const inputChange = (e) => {
    //     console.log(e.target.value);
    // };

    clickHandler = () => {
        this.setState({ showSideBar: !this.state.showSideBar })
    };

    render() {
        const { showSideBar } = this.state;
        return (
            <div className='header__mobile' style={{ backgroundColor: '#fff' }}>

                {/*side bar*/}
                <SideBar on={showSideBar} />

                <div className='header__mobile__contact'>
                    <p>Time of work 8:30 am - 7:30 pm <span className='header__mobile__contact__span'>
                    +(964) 750 555 5555
                </span></p>
                </div>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className='header__mobile__left'>
                                <Menu clickHandler={this.clickHandler} />
                                <div className='header__mobile__left-search'>
                                    <Search />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='header__mobile__logo'>
                                <Logo width={'13.5rem'} height={'4rem'} />
                            </div>
                        </Col>
                        <Col>
                            <div className='header__mobile__right'>
                                <Cart />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}