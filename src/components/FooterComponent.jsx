import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoFooter from "../assets/logoFooter.png";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="3">
            <img src={LogoFooter} alt="COVI" className="logo" />
          </Col>
          <Col lg="4">
            <div className="address mb-3 mt-3">
              <h6 className="fw-bold">ADDRESS</h6>
              <Link className="text-decoration-none">
                <i className="fa fa-map-marker-alt"></i>
                <p className="m-0">2381 La Mirada Dr. Vista, CA 92081</p>
              </Link>
            </div> 
            <div className="no mb-3 mt-4">
              <h6 className="fw-bold">PHONE</h6>
              <a
                href="https://wa.me/6285718273697" // Format URL WhatsApp
                className="text-decoration-none"
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer" // Keamanan tambahan
              >
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 857-1827-3697</p>
              </a>
            </div> 
            <div className="mail">
              <h6 className="fw-bold">CONTACT</h6>
              <a
                href="mailto:covi@gmail.com" // Format mailto untuk email
                className="text-decoration-none"
              >
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">covi@gmail.com</p>
              </a>
            </div> 
          </Col>
          <Col className="d-flex flex-column col-lg-2 mt-2">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/consultant">Consultant</Link>
          </Col>
          <Col lg="2">
            <h5 className="fw-bold mb-4 mt-2">Follow Us!</h5>
            <div className="social mt-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"  // Ganti dengan URL profil Facebook Anda
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com"  // Ganti dengan URL profil Instagram Anda
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com"  // Ganti dengan URL profil Twitter Anda
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              {/* Yelp */}
              <a
                href="https://www.yelp.com"  // Ganti dengan URL halaman Yelp Anda
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-yelp"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
