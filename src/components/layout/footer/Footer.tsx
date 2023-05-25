import { Col, Row } from "react-bootstrap";
import { FaCouch } from "react-icons/fa";
import "../../../styles/layout/footer/footer.scss";
import { Facebook, Heart, Instagram } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className='footerContainer'>
      <Row className='footerHeadingsRow'>
        <Col className='footerIconContainer'>
          <FaCouch />
        </Col>
        <Col className='footerHeaderContainer'>
          <h4 className='footerHeader'>LYCKA</h4>
        </Col>
        <Col className='footerLinkIconsContainer'>
          <Facebook />
          <Instagram />
        </Col>
      </Row>
      <Row className='footerInfoRow'>
        <Col col={2} className='footerInfoContainer'>
          <h4 className='infoHeading'>Legal</h4>
          <div className='infoUnderCategoryContainer'>
            <p>Terms of Purchase</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
          </div>
        </Col>

        <Col col={2} className='footerInfoContainer'>
          <h4 className='infoHeading'>Contact</h4>
          <div className='infoUnderCategoryContainer'>
            <p>Calle de Celila 4</p>
            <p>24960 Fuengirola</p>
            <p>Malaga</p>
            <p>Lycka@hobby.com</p>
            <p>+34 60765289</p>
          </div>
        </Col>
      </Row>

      <Row className='footerSubscribeRow'>
        <h4 className='footerSubscribeHeading'>Sign up for love letters</h4>
        <input className='footerSubInput' />
        <button className='footerSubButton'>
          Sign up <Heart className='buttonIcon' />{" "}
        </button>
      </Row>
    </footer>
  );
};
