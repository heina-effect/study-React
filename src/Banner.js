/* eslint-disable */
import React from 'react'
import { Carousel } from 'react-bootstrap';

function Banner() {
    return (
        <div>
            <Carousel fade className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src={`${process.env.PUBLIC_URL}/img/banner01.jpg`}
                        alt="First slide"
                        style={{ objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 vh-100"
                        src={`${process.env.PUBLIC_URL}/img/banner02.jpg`}
                        alt="Second slide"
                        style={{ objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 vh-100"
                        src={`${process.env.PUBLIC_URL}/img/banner03.jpg`}
                        alt="Third slide"
                        style={{ objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 vh-100"
                        src={`${process.env.PUBLIC_URL}/img/banner04.jpg`}
                        alt="Third slide"
                        style={{ objectFit: 'cover', }}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;