import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsWhatsapp,
  BsEnvelope,
  BsInstagram,
  BsFacebook,
  BsGithub,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Smansa Sembalun</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, repellat.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <BsWhatsapp />
                <p className="m-0">083129416643</p>
              </Link>
            </div>
            <div className="mail mb-1 mt-4">
              <Link className="text-decoration-none">
                <BsEnvelope />
                <p className="m-0">info@smansa.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="berita">Berita</Link>
            <Link to="guru">Guru</Link>
            <Link to="tentang">Tentang</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe.." />
              <button className="btn btn-danger  rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <a href="">
                <BsInstagram />
              </a>
              <a href="">
                <BsFacebook />
              </a>
              <a href="">
                <BsGithub />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Smansa</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
