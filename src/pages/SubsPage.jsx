import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../dist/css/subs.css";

const SubsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="subs w-100 min-vh-100 d-flex align-items-center bg-light">
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="fw-bold mb-2">Ready to get started?</h1>
            <p className="text-muted">
              14 days unlimited free trial. No contract or credit card required.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          {/* Free Starter Plan */}
          <Col md={4}>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded">
              <Card.Body>
                <h5 className="fw-bold">Free Starter Plan</h5>
                <h2 className="fw-bold display-4">$0</h2>
                <p className="text-muted">/month</p>
                <ul className="list-unstyled text-start">
                  <li>10 Visitors</li>
                  <li>3 Diagram Visualizations</li>
                  <li>Simple Template</li>
                  <li>All Widget Types</li>
                </ul>
                <Button 
                  variant="primary" 
                  className="b1 w-100"
                  onClick={() => navigate("/upload")}
                >
                  Create a free account
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Starter Plan */}
          <Col md={4}>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-primary">
              <Card.Body>
                <h5 className="fw-bold">Starter Plan</h5>
                <h2 className="fw-bold display-4">$36</h2>
                <p className="text-muted">/month</p>
                <ul className="list-unstyled text-start">
                  <li>1,000 Visitors</li>
                  <li>Open All Diagram Visualizations</li>
                  <li>Template Pro</li>
                  <li>All Widget Types</li>
                  <li>10 times consultant</li>
                </ul>
                <Button 
                  variant="primary" 
                  className="b2 w-100"
                  onClick={() => navigate("/consultant")}  
                >
                  Create a free account
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Premium Plan */}
          <Col md={4}>
            <Card className="shadow-sm p-3 mb-5 bg-primary text-white rounded">
              <Card.Body>
                <h5 className="fw-bold">Starter Plan</h5>
                <h2 className="fw-bold display-4">$110</h2>
                <p>/year</p>
                <ul className="list-unstyled text-start text-white">
                  <li>50,000 Visitors</li>
                  <li>Open All Diagram Visualizations</li>
                  <li>Template Pro</li>
                  <li>All Widget Types</li>
                  <li>Unlimited Consultant</li>
                  <li>Analyze Thoroughly</li>
                </ul>
                <Button 
                  variant="light" 
                  className="b3 w-100 mt-3 text-primary"
                  onClick={() => navigate("/consultant")}   
                >
                  Create a free account
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubsPage;
