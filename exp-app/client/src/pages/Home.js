import React from "react";
import { Col, Row, Container } from "../components/Grid";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="../../images/bnmirror.jpg" alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../../images/mcrmirror.jpg" alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../../images/fobmirror.jpg" alt="Third slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../../images/usedmirror.jpg" alt="Fourth slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../../images/tbsmirror.jpg" alt="Fifth slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../../images/tslmirror.jpg" alt="Sixth slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;
