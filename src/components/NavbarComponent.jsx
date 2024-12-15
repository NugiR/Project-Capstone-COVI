import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { scroller } from "react-scroll";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (section) => {
    if (location.pathname !== "/") {
      // Navigasi ke halaman root terlebih dahulu
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 1000,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 300); // Tunggu sampai halaman homepage selesai dirender
    } else {
      scroller.scrollTo(section, {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./public/covi.png" // replace with the path to your logo image
            alt="Logo"
            className="navbar-logo"
          />
          <img
            src="./public/tulisancovi.png" // replace with the path to your logo image
            alt="tulisan"
            className="navbar-tulisan"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* Scroll to Home Section */}
            <Nav.Link
              onClick={() => scrollToSection("home")}
              className="nav-link"
            >
              Home
            </Nav.Link>
            {/* Scroll to About Section */}
            <Nav.Link
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About Us
            </Nav.Link>
            {/* Scroll to About Section */}
            <Nav.Link
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact Us
            </Nav.Link>
            <Nav.Link href="/subscription">
              <div className="consultant-link">
                <img src='./public/Fairytale.svg' alt="Crown Icon" className="crown-icon" />
                <span>Consultant</span>
              </div>
            </Nav.Link>
          </Nav>
          <button className="login-button">Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
