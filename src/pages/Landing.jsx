import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/HeroImg.svg";
import { ArticleTerbaru } from "../data/index";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import Misicomponent from "../components/Misicomponent";

const HomePage = () => {
  let naviget = useNavigate();

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
      <div className="articles w-100 min-vh-100">
        <Container>
          <Row>
            <Misicomponent />
          </Row>
          <Row>
            {ArticleTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id}>
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary">terbaru</p>
                    <button className="btn btn-outline-info rounded-1">
                      {kelas.btn}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-primary rounded-5 btn-lg"
                onClick={() => naviget("/articles")}
              >
                Lihat Semua Article
                <BsChevronRight className="ms-1" />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
