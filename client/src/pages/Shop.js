import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import AuthorBar from "../components/AuthorBar";

const Shop = () => {
    return (
        <Container>
            <Row className={"mt-4"}>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                  
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;