import React from "react";
import '../styles/home.css';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import experienceImg from '../assets/images/experience.png'
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return (
        <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle Subtitle={"Know Before You Go"}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling opens to creating{' '}
                                <span className="highlight">memories</span>
                            </h1>
                            <p>
                            This is the world’s largest booking website with the ability to book entire trips from the hotel and airfare to the car. It’s also available in over 40 different languages with properties in 207 countries. Without a doubt, it is one of the best travel sites for packages.</p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box hero__vedio-box mt-4">
                            <video src={heroVideo} alt="" controls />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">what we serve</h5>
                        <h2 className="services__title">we offer our best services</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle Subtitle={'Explore'}/>
                        <h2 className="featured__tour-title">Our featured tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle Subtitle={'Experience'}/>
                            <h2>with our all experience<br/>we will serve you</h2>
                            <p>Without a doubt, it is one of the best travel sites <br/>for packages.</p>
                        </div>
                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years Experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle Subtitle={'Gallery'}/>
                        <h2 className="gallery__title">
                            Visit our customers tour gallery
                        </h2>
                    </Col>
                    <Col lg="12">
                        <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle Subtitle={'Fans Love'}/>
                        <h2 className="testimonial__title">
                            what our fans say about us
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter/>
        </>
    )
}
export default Home;