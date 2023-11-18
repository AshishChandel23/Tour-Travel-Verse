import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traveling information.</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your Email' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>
                        This is the world’s largest booking website with the ability to book entire trips from the hotel and airfare to the car. It’s also available in over 40 different languages with properties in 207 countries. Without a doubt, it is one of the best travel sites for packages.                        
                        </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter
