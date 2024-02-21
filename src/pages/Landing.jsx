import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/HeroImg.svg";

const HomePage = () => {
  const handleScrollToMisi = () => {
    const misiElement = document.getElementById("misi");
    misiElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Selamat datang di
                <br /> <span>SMANSA SEMBALUN</span>{" "}
              </h1>
              <button
                className="btn btn-dark btn-xs rounded-1 me-2 mb-xs-0 mb-2"
                onClick={handleScrollToMisi}
              >
                {" "}
                Visi{" "}
              </button>
              <button
                className="btn btn-outline-dark btn-xs rounded-1 me-2 mb-xs-0 mb-2"
                onClick={handleScrollToMisi}
              >
                {" "}
                Misi{" "}
              </button>
              <p className="mb-4">
                Membangun Generasi Cerdas, Terampil, Berbudaya yang berwawasan
                Lingkungan berlandaskan Iman dan Taqwa.
              </p>
              <div className="services">
                <h5 className="fw-bold">Explore Now!</h5>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                width="450"
                height="450"
                style={{ filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))" }}
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
