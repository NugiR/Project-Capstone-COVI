import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"
import VDiagram from "../assets/vdiagram.png"
import DiscussImg from "../assets/discussimg.png"
import ContactImg from "../assets/Contact-us.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataSwiper } from "../data/review"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 } // Animasi dipicu saat 50% elemen terlihat
    );
  
    const testimonialElement = document.querySelector(".testimonial");
  
    if (testimonialElement) observer.observe(testimonialElement);
  
    return () => {
      if (testimonialElement) observer.unobserve(testimonialElement);
    };
  }, []);  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const homeElement = homeRef.current;
    const aboutElements = aboutRef.current.querySelectorAll(".animate-target");

    if (homeElement) observer.observe(homeElement);
    aboutElements.forEach((el) => observer.observe(el));

    return () => {
      if (homeElement) observer.unobserve(homeElement);
      aboutElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="homepage">
      <header id="home" name="home" ref={homeRef} className="home-header w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Unlock <span className="highlight1">Insight</span> with 
                <span className="highlight2"> Data </span>
                <span className="highlight3">Visualizations</span>
              </h1>
              <p className="mb-4">
              Transform complex data into actionable insights to drive your business forward
              </p>
              <Link to="/upload" className="btn btn-lg rounded-1 custom-button">Let's get started!</Link>
            </Col>
            <Col lg="6">
              <img src={VDiagram} alt="v-diagram" className="img-fluid"/>
            </Col>
          </Row>
        </Container>
      </header>
      <div id="about" name="about" className="About w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row ref={aboutRef} className="align-items-center">
            <Col lg={6} className="animate-target about-image">
              <img src={DiscussImg} alt="DiscussImg" className="img-fluid"/>
            </Col>
            <Col lg={6} className="Us animate-target about-text">
              <h1>
                <span>About Us</span>
              </h1>
              <p>
              Welcome to COVI (Come Visualization), where we believe that understanding data should be effortless and accessible to everyone. Our mission is to empower individuals and businesses by transforming complex data into clear, actionable insights through intuitive visualization and predictive analytics.
              </p>
              <p>
              At COVI, we leverage cutting-edge technology to provide users with powerful tools that make data visualization and prediction simple and efficient. Whether you are a data analyst, a business owner, or someone curious about data trends, our platform is designed to cater to your needs.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5 text-white">What Clients Say</h1>
              <p className="ptesti text-center text-white">Below are some testimonials from our valued clients, sharing their experiences and insights about our services.</p>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return <SwiperSlide key={data.id} className="shadow">
                  <p className="desc">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.work}</p>
                    </div>
                  </div>
                </SwiperSlide>;
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      <div id="contact" name="contact" className="contact w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <h5>Contact Us</h5>
              <h1 className="mb-4">Make an Appointment</h1>
              <form>
                <Row className="mb-3">
                  <Col md={6}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <select className="form-select" required>
                      <option value="">Please Select</option>
                      <option value="service1">Service 1</option>
                      <option value="service2">Service 2</option>
                      <option value="service3">Service 3</option>
                    </select>
                  </Col>
                  <Col md={6}>
                    <select className="form-select" required>
                      <option value="">4:00 Available</option>
                      <option value="time1">9:00 AM</option>
                      <option value="time2">11:00 AM</option>
                      <option value="time3">2:00 PM</option>
                    </select>
                  </Col>
                </Row>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  Book Appointment
                </button>
              </form>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src={ContactImg}
                alt="Appointment Illustration"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage