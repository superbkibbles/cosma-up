import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import Cart from '../../../../assets/svgs/Cart';
import Search from "../../../../assets/svgs/Search";
import Menu from "../../../../assets/svgs/Menu";
import Logo from "../../../../assets/svgs/logo";
// import SearchBox from "../../../SearchBox";

export default () => {
    // const inputChange = (e) => {
    //     console.log(e.target.value);
    // };

    return (
        <div className='header__mobile'>
            <div className='header__mobile__contact'>
                <p className='paragraph'>Time of work 8:30 am - 7:30 pm <span className='header__mobile__contact__span'>
                    +(964) 750 555 5555
                </span></p>
            </div>

            <Container fluid className='header'>
                <Row>
                    <Col xs={3}>
                        <Menu />
                        <Search />
                    </Col>
                    <Col xs={6}>
                        <div style={{ textAlign: 'center' }}>
                            <Logo width={'15.5rem'} height={'4rem'} />
                        </div>
                    </Col>
                    <Col xs={3} style={{ textAlign: 'right' }}>
                        <Cart />
                    </Col>
                </Row>
            </Container>
        </div>
        )
}