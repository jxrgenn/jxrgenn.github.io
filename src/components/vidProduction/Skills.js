import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../../assets/img/reliability.png';
import premiumImg from '../../assets/img/premium.png';
import experienceImg from '../../assets/img/customer-review.png';
import calendarImg from '../../assets/img/calendar.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div id="Services">


            <section className="skill" id="skills">
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <h2>
                                    Why choose us
                                </h2>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="item">
                                        <img src={image1} alt="Image" />
                                        <h5 class="skillText">
                                            Trust
                                        </h5>
                                        <h5 className="descText">
                                            We value open communication and teamwork. Our collaborative approach ensures that your vision is realized seamlessly, every step of the way.
                                        </h5>
                                    </div>
                                    <div className="item">
                                        <img src={premiumImg} alt="Image" />
                                        <h5 class="skillText">
                                            Premium Services
                                        </h5>
                                        <h5 class="descText">
                                            Join a roster of satisfied clients who have experienced our commitment to excellence. Explore our diverse portfolio showcasing successful projects across various industries and mediums.
                                        </h5>
                                    </div>
                                    <div className="item">
                                        <img src={experienceImg} alt="Image" />
                                        <h5 class="skillText">
                                            10+ years of experience
                                        </h5>
                                        <h5 className="descText">
                                            Benefit from over a decade of industry expertise. Our seasoned professionals bring a wealth of knowledge and skill to every project.
                                        </h5>
                                    </div>
                                    <div className="item">
                                        <img src={calendarImg} alt="Image" />
                                        <h5 class="skillText">
                                            Up-To-Date with latest technologies
                                        </h5>
                                        <h5 className="descText">
                                            We're not afraid to push boundaries and explore new creative avenues. Experience fresh, cutting-edge content that captivates audiences.                                </h5>
                                    </div>

                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </div>
    )
}