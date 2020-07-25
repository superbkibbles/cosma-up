import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import Logo from "../../../../assets/svgs/logo";
import SearchBox from "../../../SearchBox";

export default () => {
    const inputChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <Container fluid className='header'>
            <div className='header__desktop'>
                <Row>
                    <Col>
                        <div className='header__logo'>
                            <Logo width={'23.5rem'} height={'10rem'} />
                        </div>
                    </Col>
                    <Col>
                        <SearchBox inputChange={inputChange} />
                    </Col>
                    <Col>
                        <ul className='header__contact text-right'>
                            <li className='header__contact-li'>
                                <a href="tel:+964-750-397-8938" className='btn-text'>+9647503978938</a>
                            </li>
                            <li className='header__contact-li'>time of work</li>
                            <li className='header__contact-li'>8:30 am - 7:30pm</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}