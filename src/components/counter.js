import React from "react";
import {Col, Row} from "react-bootstrap";
import { connect } from "react-redux";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className='jumbotron'>
            <Row className='d-flex align-items-center justify-content-center'>
                <Col sm={6}>
                    <h1 id="counter" className='justify-content-center' style={{fontSize: '256px', textAlign: 'center'}}>{counter}</h1>
                </Col>
                <Col sm={6} className='align-items-center justify-content-center w-100 h-100'>
                    <button id="dec" className="btn btn-primary btn-lg m-4 j" style={{width: '150px', height: '50px'}} onClick={dec}>DEC</button>
                    <button id="inc" className="btn btn-primary btn-lg m-4" style={{width: '150px', height: '50px'}} onClick={inc}>INC</button>
                    <button id="rnd" className="btn btn-primary btn-lg m-4" style={{width: '150px', height: '50px'}} onClick={rnd}>RND</button>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps)(Counter);