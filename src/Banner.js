/* eslint-disable */
import main1 from './img/common1.jpg';
import main2 from './img/common2.jpg';
import main3 from './img/common3.jpg';
import {Carousel} from 'react-bootstrap';

function Banner(){ 
    return(
        <div>
            <Carousel fade className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={main1}
                        alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={main2}
                        alt="Second slide"
                    />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={main3}
                        alt="Third slide"
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