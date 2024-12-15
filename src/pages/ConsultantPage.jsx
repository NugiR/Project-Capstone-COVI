import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../dist/css/consultant.css";
import oliver from "../assets/oliver.png"
import emiliy from "../assets/Emiliy.png"
import james from "../assets/James.png"
import henry from "../assets/Henry.png"

const ConsultantPage = () => {
  const consultants = [
    {
      name: "Oliver Smith",
      title: "Senior Data Scientist",
      helps: ["Data Analyst", "Data Engineer"],
      image: oliver,
      email: "oliver.smith@example.com", // Tambahkan email
      whatsapp: "+6281234567890", // Tambahkan nomor WhatsApp
    },
    {
      name: "Emily Johnson",
      title: "Senior Data Scientist",
      helps: ["Data Science", "Data Analyst"],
      image: emiliy,
      email: "emily.johnson@example.com",
      whatsapp: "+6281234567891",
    },
    {
      name: "James Anderson",
      title: "Senior Data Scientist",
      helps: ["Data Scientist", "ML Engineer"],
      image: james,
      email: "james.anderson@example.com",
      whatsapp: "+6281234567892",
    },
    {
      name: "Henry Walker",
      title: "Senior Data Scientist",
      helps: ["ML Engineer", "Data Engineer"],
      image: henry,
      email: "henry.walker@example.com",
      whatsapp: "+6281234567893",
    },
  ];

  return (
    <div className="consultant w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row>
          <Col className="text-center mt-5">
            <h5 className="text-muted">Consultant</h5>
            <h1>Recommendations for You</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          {consultants.map((consultant, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm rounded-3">
                <Card.Body>
                  <Row>
                    <Col md={4} className="d-flex align-items-center">
                      <img
                        src={consultant.image}
                        alt={consultant.name}
                        className="img-fluid"
                      />
                    </Col>
                    <Col md={8}>
                      <h5>{consultant.name}</h5>
                      <p className="text-muted">{consultant.title}</p>
                      <div className="helps-section">
                        <p className="helps-title">Helping with:</p>
                        <div className="helps-buttons">
                          {consultant.helps.map((help, i) => (
                            <Button
                              key={i}
                              variant="outline-primary"
                              size="sm"
                              className="me-2 mb-2"
                            >
                              {help}
                            </Button>
                          ))}
                        </div>
                        <hr className="helps-divider" />
                      </div>
                      <div>
                        <Button 
                          variant="outline-secondary" 
                          className="me-2"
                          onClick={() =>
                            window.open(
                              `mailto:${consultant.email}`,
                              "_blank"
                            )
                          }
                        >
                          Email
                        </Button>
                        <Button 
                          variant="primary"
                          onClick={() =>
                            window.open(
                              `https://wa.me/${consultant.whatsapp.replace(
                                "+",
                                ""
                              )}`,
                              "_blank"
                            )
                          }
                        >
                          Chat
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ConsultantPage;
