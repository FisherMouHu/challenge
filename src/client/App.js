import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import AgeDemographic from './AgeDemographic';
import AllUsers from './AllUsers';

export default function App() {
    return (
        <Container>
            <Row>
                <Col>
                    <AllUsers />
                    <AgeDemographic />
                </Col>
            </Row>
        </Container>
    )
}