import React, { useContext } from 'react'
import "../css files/header.css"
import "../css files/inclusion-container.css"
import vector from '../svgs/Vector.svg'
import contact from '../svgs/contact.svg'
import contact2 from '../svgs/contact2.svg'
import inclusion from '../svgs/inclusion.svg'
import peoples from '../svgs/peoples.svg'
import { useHistory } from 'react-router-dom'
import { UserContext } from './AuthProvider'
function Landing() {
    const { currUser, setcurrUser } = useContext(UserContext);
    console.log(currUser)
    const history = useHistory();
    const handleLoginClick = () => {
        if(!currUser){
            history.push('/register')
        }else{
            setcurrUser(0);
        }
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="nav-items">
                        <a href="/" className="nav-single-item logo">
                            <img src={vector} alt="logo" />
                        </a>
                    </div>
                    <div className="nav-items">
                        <p className="nav-single-item para">COVID-19</p>
                    </div>
                    <hr className="navbar-line" />
                    <div className="nav-items">
                        <p className="nav-single-item para">THEMES</p>
                    </div>
                    <hr className="navbar-line" />
                    <div className="nav-items">
                        <p className="nav-single-item para">INVESTMENT PORTFOLIO</p>
                    </div>
                    <hr className="navbar-line" />
                    <div className="nav-items">
                        <p className="nav-single-item para">LEARNING LAB</p>
                    </div>
                    <hr className="navbar-line" />
                    <div style={{ cursor: 'pointer' }} className="nav-items">
                        <p className="nav-single-item para">DATA VISUALISATION</p>
                    </div>
                    <hr className="navbar-line" />
                    <div className="nav-items logindiv" onClick={handleLoginClick}>
                        <p className="nav-single-item para">
                            {
                                currUser?"LOG OUT":"LOG IN"
                            }
                        </p>
                    </div>
                </div>
            </nav>
            <div className="inclusion">
                <div className="small-nav">
                    <p className="para-inclusion bold">INCLUSIVE DEVELOPMENT</p>
                    <p className="para-inclusion normal">NAVIGATE TO RESOURCES</p>
                </div>
                <div className="inclusion-section">
                    <div className="inclusion-section-text">
                        <h2 className="question-font">What is</h2>
                        <h2 className="question-font" style={{ marginTop: "-25px" }}>Inclusion?</h2>
                        <p className="inclusion-text">Every person, regardless of their identity, is
                            instrumental to the transformation of their own
                            societies - and yet many are still denied full access
                            to legal protections, social and economic
                            participation and essential services, either in
                            principle or in practice. Their inclusion throughout
                            the development process is essential to achieve
                            the human right to health and can be realised by
                            accountably, affordably, and reliably expanding
                            health care access to the poor and most
                            vulnerable. As the World Health Organization has
                            recognized, this means addressing the links
                            between poor health outcomes and social
                            exclusion, including education, employment
                            status, income level, gender and ethnicity: (USAID
                            2018, Gaitonde et al 2018, WHO 2017)
                        </p>
                        <div className="inclusion-btn">LEARN MORE</div>
                    </div>
                    <div className="inclusion-section-svg">
                        <img width='100%' height="100%" src={inclusion} alt="InclusionSvg" />
                    </div>
                </div>
            </div>
            <div className="section2">
                <h2 style={{ textAlign: "center", paddingTop: "60px", fontSize: "45px", fontWeight: "600" }} className="question-font">Who do we need to include in India?</h2>
                <p className="section2-para">Despite substantial improvements over the past two decades, health outcomes in India continue to be closely tied to socio-economic status, social identity and geographical
                    location. 'Excluded groups' are those among whom a majority of members systematically lack access to appropriate, affordable and quality
                    health services.
                </p>
                <div className="people-section">
                    <img width="100%" height="100%" src={peoples} alt="community" />
                </div>
                <div className="inclusion-btn" style={{ width: "25%", margin: "auto" }}>LEARN MORE</div>
            </div>
            <div className="section3">
                <div className="section3-text">
                    <h3 style={{ marginBlockStart: "0", marginBlockEnd: "0" }} className="question-font">How to make your program more inclusive?</h3>
                    <p className="inclusion-text" style={{ paddingRight: "80px", paddingTop: "20px" }}>While inclusion as an objective is inherent in development sector efforts, actors may be at
                        different stages of their inclusion journey, and facing a diverse set of challenges. While some
                        stakeholders may be concerned about identifying and reaching the 'last mile' or 'base of pyramid
                        populations, others may be struggling to recruit and retain a diverse workforce or to integrate an
                        inclusion lens across their program cycle. Wherever you are on this inclusion journey, the
                        Inclusive Development Resource Guide aims to support your efforts.
                    </p>
                </div>
                <div className="section3-svg">
                    <img width="100%" height="100%" src={contact} alt="download info" />
                </div>
            </div>
            <div className="contact-section">
                <div className="contact-section-svg">
                    <img style={{ marginTop: "-50px" }} width="100%" src={contact2} alt="contact svg" />
                </div>
                <div className="contact-info-container">
                    <h2 className="question-font">Contact Us</h2>
                    <p className="inclusion-text">Please share your questions, suggestions and insights with us at abc@abcmail.com</p>
                </div>
            </div>
            <div className="blanck"></div>
            <div className="footer-end">
                <p>Lorem ispum dolor sit amet - legal stuff goes here</p>
            </div>
        </>
    )
}

export default Landing
