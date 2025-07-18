import React, { useEffect } from "react";
import "./Home.css";
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";
import ScrollCounter from "../../components/ScrollCounter/ScrollCounter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        <div className="_HeroContainer ">
          <div className="container-fluid">
            <div className="_TextHero">
              <div
                className="_TextContainer"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="_WellcomeText">
                  <p>Welcome to Dentia</p>
                </div>
                <div className="_MainText">
                  <h2>
                    Exceptional<span> Dental </span>Care
                  </h2>
                </div>
                <div className="_DiscHero">
                  <p>
                    We offer high-quality dental care tailored for the whole
                    family. From routine checkups to advanced treatments, our
                    compassionate team ensures your smile stays healthy and
                    confident.
                  </p>
                </div>
                <div className="_BtnShop">
                  <div className="_Btn">
                    <ButtonSubmit name={"Get Started Now"} />
                  </div>
                  <div className="_Clients">
                    <div className="_Images">
                      <img
                        src="/src/assets/images/users/1.webp"
                        alt="user one"
                      />
                      <img
                        src="/src/assets/images/users/2.webp"
                        alt="user two"
                      />
                      <img
                        src="/src/assets/images/users/3.webp"
                        alt="user three"
                      />
                    </div>
                    <div className="_Status">
                      <span>23k</span>
                      <span>happy customers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_ImageHero">
                <img src="/src/assets/images/c2.webp" alt="teeth image" />
              </div>
            </div>
          </div>
        </div>
        <div className="_StatusContainer">
          <div className="container-fluid">
            <div className="_statusImage">
              <div className="_Image">
                <img
                  src="/src/assets/images/clients/p1.webp"
                  alt="stats-count image"
                  data-aos="zoom-in"
                />
              </div>
              <div className="_Image">
                <img
                  src="/src/assets/images/clients/p2.webp"
                  alt="stats-count image"
                  data-aos="zoom-in"
                  className="_Unique"
                />
              </div>
            </div>
            <div className="_TextHero _TextHeroTwo">
              <div className="_DescText" data-aos="fade-left">
                <p className="_TitleAbout">About Us</p>
              </div>
              <div
                className="_TitleText"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h2>Professionals and Personalized Dental Excellence</h2>
              </div>
              <div
                className="_DescText"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <p>
                  We offer high-quality dental care tailored for the whole
                  family. From routine checkups to advanced treatments, our
                  compassionate team ensures your smile stays healthy and
                  confident.
                </p>
              </div>
              <div
                className="_Status"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="_allStatus">
                  <div className="_Owner">
                    <div className="_Image">
                      <span
                        style={{
                          color: "#4a7cd2",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                        }}
                      >
                        ✔
                      </span>
                    </div>
                    <div className="_Info">
                      <span className="_statusText">
                        Personalized Treatment Plans
                      </span>
                    </div>
                  </div>
                  <div className="_Owner">
                    <div className="_Image">
                      <span
                        style={{
                          color: "#4a7cd2",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                        }}
                      >
                        ✔
                      </span>{" "}
                    </div>
                    <div className="_Info">
                      <span className="_statusText">
                        State-of-the-Art Technology
                      </span>
                    </div>
                  </div>
                  <div className="_Owner">
                    <div className="_Image">
                      <span
                        style={{
                          color: "#4a7cd2",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                        }}
                      >
                        ✔
                      </span>{" "}
                    </div>
                    <div className="_Info">
                      <span className="_statusText">
                        Gentle Care for Kids and Adults
                      </span>
                    </div>
                  </div>
                  <div className="_Owner">
                    <div className="_Image">
                      <span
                        style={{
                          color: "#4a7cd2",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                        }}
                      >
                        ✔
                      </span>{" "}
                    </div>
                    <div className="_Info">
                      <span className="_statusText">
                        Flexible Appointment Scheduling{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_BtnShop">
                <div
                  className="_BtnStatus"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <Link to="/book-appointment">
                  <ButtonSubmit name={"Book Appointment"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_LifeShoping">
          <div className="container-fluid">
            <div
              className="_OneCard"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="_Image">
                <div className="_ImageContainer">
                  <img
                    src="/src/assets/images/Icons/tooth-1.png"
                    alt="General Dentistry image"
                  />
                </div>
              </div>
              <div className="_TextCard">
                <div className="_Title">
                  <span>General Dentistry</span>
                </div>
                <div className="_Disc">
                  <span>
                    Complete oral care for every smile with cleanings, exams,
                    and more.
                  </span>
                </div>
                <div className="_hover-btn">
                  <button className="hover-btn">
                    <span className="icon">+</span>
                    <span className="text">Read More</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="_OneCard"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="_Image">
                <div className="_ImageContainer">
                  <img
                    src="/src/assets/images/Icons/tooth-2.png"
                    alt="Cosmetic Dentistry image"
                  />
                </div>
              </div>
              <div className="_TextCard">
                <div className="_Title">
                  <span>Cosmetic Dentistry</span>
                </div>
                <div className="_Disc">
                  <span>
                    Enhance your smile’s beauty with whitening, veneers, and
                    more.
                  </span>
                </div>
                <div className="_hover-btn">
                  <button className="hover-btn">
                    <span className="icon">+</span>
                    <span className="text">Read More</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="_OneCard"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="_Image">
                <div className="_ImageContainer">
                  <img
                    src="/src/assets/images/Icons/tooth-3.png"
                    alt="Pediatric Dentistry image"
                  />
                </div>
              </div>
              <div className="_TextCard">
                <div className="_Title">
                  <span>Pediatric Dentistry</span>
                </div>
                <div className="_Disc">
                  <span>
                    Gentle and fun dental care for kids to grow healthy, happy
                    smiles.
                  </span>
                </div>
                <div className="_hover-btn">
                  <button className="hover-btn">
                    <span className="icon">+</span>
                    <span className="text">Read More</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="_OneCard"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="_Image">
                <div className="_ImageContainer">
                  <img
                    src="/src/assets/images/Icons/tooth-4.png"
                    alt="Restorative Dentistry image"
                  />
                </div>
              </div>
              <div className="_TextCard">
                <div className="_Title">
                  <span>Restorative Dentistry</span>
                </div>
                <div className="_Disc">
                  <span>
                    Repair and restore your teeth for lasting comfort and
                    function.
                  </span>
                </div>
                <div className="_hover-btn">
                  <button className="hover-btn">
                    <span className="icon">+</span>
                    <span className="text">Read More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="_Categories">
          <div className="container-fluid">
            <div className="_Title">
              <span data-aos="fade-down" data-aos-delay="100">
                Meet Our Dental Team
              </span>
              <h2 data-aos="fade-down" data-aos-delay="200">
                Committed to Your Smile
              </h2>
              <p data-aos="fade-down" data-aos-delay="300">
                Our experienced dental team is here to make every visit positive
                and personalized. With gentle hands and caring hearts.
              </p>
            </div>
            <div className="_OurCategories">
              <div className="_OneCard" data-aos="zoom-in" data-aos-delay="200">
                <img
                  src="/src/assets/images/Doctors/1.webp"
                  alt="dessert-bloom image"
                />
                <p>
                  <span>Dr. Sarah Bennett</span>
                  <span className="_Spatial">Lead Dentist</span>
                </p>
              </div>
              <div className="_OneCard" data-aos="zoom-in" data-aos-delay="200">
                <img
                  src="/src/assets/images/Doctors/2.webp"
                  alt="dessert-bloom image"
                />
                <p>
                  <span>Dr. Maya Lin</span>
                  <span className="_Spatial">Cosmetic Dentist</span>
                </p>
              </div>
              <div className="_OneCard" data-aos="zoom-in" data-aos-delay="200">
                <img
                  src="/src/assets/images/Doctors/3.webp"
                  alt="dessert-bloom image"
                />
                <p>
                  <span>Dr. Michael Reyes</span>
                  <span className="_Spatial">Pediatric Specialist</span>
                </p>
              </div>
              <div className="_OneCard" data-aos="zoom-in" data-aos-delay="200">
                <img
                  src="/src/assets/images/Doctors/4.webp"
                  alt="dessert-bloom image"
                />
                <p>
                  <span>Dr. James Carter</span>
                  <span className="_Spatial">Dental Hygienist</span>
                </p>
              </div>
            </div>
            <div className="_CountersContainer">
              <div className="_Counters">
                <ScrollCounter end={10000} label="Happy Patients" />
                <ScrollCounter end={2500} label="Teeth Whitened" />
                <ScrollCounter end={800} label="Dental Implants" />
                <ScrollCounter end={15} label="Years of Exeperience" />
              </div>
            </div>
          </div>
        </div>
        <div className="_SaleComponent _Ready">
          <div className="container-fluid">
            <div className="_Title">
              <span>Ready to Find your Perfect Experiance?</span>
            </div>
            <div className="_Disc">
              <span>
                Book now from our website or visit us in person to see all the
                beauty.
              </span>
            </div>
            <div className="_BtnShop">
              <div className="_BtnReady">
                <Link to="/book-appointment">
                  <ButtonSubmit name={"Book Appointment"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
